import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { firstName, lastName, company, email, jobTitle, country, phoneCode, phoneNumber } = await req.json()

    // Validate required fields
    if (!firstName || !lastName || !company || !email || !jobTitle || !country || !phoneNumber) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Send email to Pravin using Resend
    const emailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
      },
      body: JSON.stringify({
        from: 'Demo Request <noreply@evergrowdigital.com>',
        to: ['pravin@evergrowdigital.com'],
        subject: `New Demo Request - ${company}`,
        html: `
          <h2>New Demo Request Submitted</h2>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Job Title:</strong> ${jobTitle}</p>
          <p><strong>Country:</strong> ${country}</p>
          <p><strong>Phone:</strong> ${phoneCode} ${phoneNumber}</p>
          <p><strong>Source:</strong> Retail Industry Page</p>
          <p><strong>Time:</strong> ${new Date().toISOString()}</p>
        `,
      }),
    })

    if (!emailRes.ok) {
      console.error('Failed to send email:', await emailRes.text())
      return new Response(
        JSON.stringify({ error: 'Failed to send notification email' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Send confirmation email to the user
    const confirmationRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
      },
      body: JSON.stringify({
        from: 'EverGrow Digital <noreply@evergrowdigital.com>',
        to: [email],
        subject: 'Thank You for Your Demo Request',
        html: `
          <h2>Thank You for Your Interest!</h2>
          <p>Dear ${firstName},</p>
          <p>Thank you for requesting a demo of our AI retail solutions. We've received your information and our team will contact you within 24 hours to schedule your personalized demo.</p>
          <p><strong>What's Next:</strong></p>
          <ul>
            <li>Our sales team will reach out to you shortly</li>
            <li>We'll schedule a demo at your convenience</li>
            <li>You'll see how our AI can transform your retail business</li>
          </ul>
          <p>If you have any immediate questions, feel free to contact us at pravin@evergrowdigital.com</p>
          <p>Best regards,<br>The EverGrow Digital Team</p>
        `,
      }),
    })

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Demo request submitted successfully' 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Error processing demo request:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})