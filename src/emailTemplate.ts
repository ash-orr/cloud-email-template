export type CloudEmailTemplateParams = {
  organizationName: string;
  domainName: string;
  activationUrl: string;
};

const baseTemplate = `<!doctype html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Portnox Cloud: Verify Your Mail Domain</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f3f6fa;">
    <center style="width:100%;background-color:#f3f6fa;">
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:#f3f6fa;border-collapse:collapse;">
        <tr>
          <td align="center" style="padding:28px 12px;">
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="760" style="width:760px;max-width:760px;background-color:#ffffff;border:1px solid #d8e0ea;border-radius:14px;border-collapse:collapse;">
              <tr>
                <td style="padding:18px 24px;border-bottom:1px solid #d8e0ea;font-family:Figtree,Arial,Helvetica,sans-serif;font-size:16px;line-height:20px;font-weight:600;color:#171d26;">
                  Portnox Cloud
                </td>
              </tr>
              <tr>
                <td style="padding:30px 24px 10px;font-family:Figtree,Arial,Helvetica,sans-serif;color:#171d26;">
                  <h1 style="margin:0 0 14px;font-size:30px;line-height:36px;font-weight:600;color:#171d26;">Welcome to Portnox Cloud - let's complete your setup.</h1>
                  <p style="margin:0 0 12px;font-size:15px;line-height:24px;color:#566273;">To gain access to your {{organizationName}} Portnox Cloud organization, please verify your mail domain below.</p>
                  <p style="margin:0 0 12px;font-size:15px;line-height:24px;color:#566273;">To activate the mail domain <strong style="color:#171d26;">{{domainName}}</strong> and complete your account setup, click the button below.</p>
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin:18px 0 12px;border-collapse:collapse;">
                    <tr>
                      <td align="center" style="border-radius:4px;background-color:#00838f;">
                        <a href="{{activationUrl}}" target="_blank" style="display:inline-block;min-width:210px;padding:11px 18px;font-family:Figtree,Arial,Helvetica,sans-serif;font-size:13px;line-height:16px;font-weight:500;color:#ffffff;text-decoration:none;border-radius:4px;">Activate Mail Domain</a>
                      </td>
                    </tr>
                  </table>
                  <p style="margin:0 0 8px;font-size:13px;line-height:20px;color:#6f7f91;">This verification link expires in 48 hours. If you did not initiate this request, no action is required.</p>
                </td>
              </tr>
              <tr>
                <td style="padding:18px 24px 8px;border-top:1px solid #d8e0ea;font-family:Figtree,Arial,Helvetica,sans-serif;">
                  <p style="margin:0 0 12px;font-size:11px;line-height:16px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#171d26;">Helpful resources</p>
                  <p style="margin:0 0 8px;font-size:13px;line-height:20px;"><a href="https://docs.portnox.com/topics/quick_start" target="_blank" style="color:#007c96;text-decoration:none;">Quick Start Guide</a> | <a href="https://success.portnox.com/s/" target="_blank" style="color:#007c96;text-decoration:none;">Support Center</a> | <a href="https://docs.portnox.com/?utm_medium=website&utm_source=home" target="_blank" style="color:#007c96;text-decoration:none;">Learn more</a> | <a href="https://www.portnox.com/resources/" target="_blank" style="color:#007c96;text-decoration:none;">Blog and Best Practices</a></p>
                  <p style="margin:8px 0 0;font-size:13px;line-height:20px;color:#566273;">For assistance, contact our support team at <a href="mailto:support@portnox.com" style="color:#007c96;text-decoration:none;">support@portnox.com</a> or visit the <a href="https://success.portnox.com/s/" target="_blank" style="color:#007c96;text-decoration:none;">Support Portal</a>.</p>
                </td>
              </tr>
              <tr>
                <td style="padding:14px 24px 18px;border-top:1px solid #d8e0ea;font-family:Figtree,Arial,Helvetica,sans-serif;font-size:12px;line-height:18px;color:#6f7f91;">© 2026 Portnox | Access Layers, all rights reserved.<br /><a href="https://www.portnox.com/privacy-policy" target="_blank" style="color:#007c96;text-decoration:none;">Privacy Policy</a> · <a href="https://www.portnox.com/terms-of-service" target="_blank" style="color:#007c96;text-decoration:none;">Terms of Service</a></td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </center>
  </body>
</html>`;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function renderCloudEmailTemplate(params: CloudEmailTemplateParams): string {
  const organizationName = escapeHtml(params.organizationName);
  const domainName = escapeHtml(params.domainName);
  const activationUrl = escapeHtml(params.activationUrl);

  return baseTemplate
    .replace(/\{\{organizationName\}\}/g, organizationName)
    .replace(/\{\{domainName\}\}/g, domainName)
    .replace(/\{\{activationUrl\}\}/g, activationUrl);
}
