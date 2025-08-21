import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.enum(['taxation', 'web-design', 'both']),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  budget: z.enum(['under-1k', '1k-5k', '5k-10k', '10k-plus', 'not-sure']).optional(),
  timeline: z.enum(['asap', '1-month', '2-3-months', '3-plus-months', 'flexible']).optional(),
})

// Initialize Resend with API key from environment
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = contactSchema.parse(body)

    // Format the service type for display
    const serviceMap = {
      'taxation': 'Taxation Services',
      'web-design': 'Web Design',
      'both': 'Both Services'
    }

    const budgetMap = {
      'under-1k': 'Under $1,000',
      '1k-5k': '$1,000 - $5,000',
      '5k-10k': '$5,000 - $10,000',
      '10k-plus': '$10,000+',
      'not-sure': 'Not sure'
    }

    const timelineMap = {
      'asap': 'ASAP',
      '1-month': 'Within 1 month',
      '2-3-months': '2-3 months',
      '3-plus-months': '3+ months',
      'flexible': 'Flexible'
    }

    // Create email content
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Contact Form Submission</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #3BF0E5; border-bottom: 2px solid #3BF0E5; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #333;">Contact Information</h3>
              <p><strong>Name:</strong> ${validatedData.name}</p>
              <p><strong>Email:</strong> ${validatedData.email}</p>
              ${validatedData.phone ? `<p><strong>Phone:</strong> ${validatedData.phone}</p>` : ''}
              ${validatedData.company ? `<p><strong>Company:</strong> ${validatedData.company}</p>` : ''}
            </div>

            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #333;">Project Details</h3>
              <p><strong>Service Needed:</strong> ${serviceMap[validatedData.service]}</p>
              ${validatedData.budget ? `<p><strong>Budget:</strong> ${budgetMap[validatedData.budget]}</p>` : ''}
              ${validatedData.timeline ? `<p><strong>Timeline:</strong> ${timelineMap[validatedData.timeline]}</p>` : ''}
            </div>

            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #333;">Message</h3>
              <p style="white-space: pre-wrap;">${validatedData.message}</p>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center;">
              <p style="color: #666; font-size: 14px;">
                This email was sent from the Aurora N&N Business Solutions contact form.
              </p>
            </div>
          </div>
        </body>
      </html>
    `

    // Send email using Resend
    if (!resend) {
      console.error('Resend API key not configured')
      return NextResponse.json(
        { message: 'Email service not configured' },
        { status: 500 }
      )
    }

    const emailResponse = await resend.emails.send({
      from: 'Aurora N&N Contact Form <noreply@aurorabusiness.ca>',
      to: ['n@aurorabusiness.ca'],
      replyTo: validatedData.email,
      subject: `New ${serviceMap[validatedData.service]} Inquiry from ${validatedData.name}`,
      html: emailHtml,
    })

    // Send confirmation email to the user
    const confirmationHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Thank You for Contacting Aurora N&N</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #3BF0E5; border-bottom: 2px solid #3BF0E5; padding-bottom: 10px;">
              Thank You for Contacting Us!
            </h2>
            
            <p>Hi ${validatedData.name},</p>
            
            <p>Thank you for reaching out to Aurora N&N Business Solutions. We've received your inquiry about our ${serviceMap[validatedData.service].toLowerCase()} and will get back to you within 24 hours.</p>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #333;">What's Next?</h3>
              <ul>
                <li>We'll review your inquiry and prepare a personalized response</li>
                <li>You'll hear from us within 24 hours (usually much sooner!)</li>
                <li>We'll schedule a free consultation to discuss your needs</li>
              </ul>
            </div>

            <p>In the meantime, feel free to explore our resources:</p>
            <ul>
              <li><a href="https://aurorabusiness.ca/calculators" style="color: #3BF0E5;">Tax Calculators</a></li>
              <li><a href="https://aurorabusiness.ca/case-studies" style="color: #3BF0E5;">Case Studies</a></li>
              <li><a href="https://aurorabusiness.ca/resources" style="color: #3BF0E5;">Blog & Resources</a></li>
            </ul>

            <p>Best regards,<br>
            <strong>The Aurora N&N Team</strong></p>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center;">
              <p style="color: #666; font-size: 14px;">
                Aurora N&N Business Solutions Inc.<br>
                Vancouver, BC, Canada<br>
                <a href="mailto:n@aurorabusiness.ca" style="color: #3BF0E5;">n@aurorabusiness.ca</a>
              </p>
            </div>
          </div>
        </body>
      </html>
    `

    await resend.emails.send({
      from: 'Aurora N&N <noreply@aurorabusiness.ca>',
      to: [validatedData.email],
      subject: 'Thank you for contacting Aurora N&N Business Solutions',
      html: confirmationHtml,
    })

    return NextResponse.json(
      { 
        message: 'Email sent successfully',
        id: emailResponse.data?.id 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          message: 'Validation error',
          errors: error.issues 
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
