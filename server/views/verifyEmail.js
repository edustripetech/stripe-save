import dotenv from 'dotenv';

const { config } = dotenv;
config();

const verifyEmal = `<head>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta content="telephone=no" name="format-detection">
<title>Responsive Email Template</title>
<style type="text/css">
  .ReadMsgBody {width: 100%; background-color: #ffffff;}
      .ExternalClass {width: 100%; background-color: #ffffff;}
      body {
          width: 100%;
          background-color: #ffffff;
          margin:0;
          padding:0;
          -webkit-font-smoothing: antialiased;
          font-family: arial, sans-serif;
      }
      a { color:#D8D8D8; text-decoration:none }

      table {border-collapse: collapse;}

      body[yahoo] .desktop-hidden { max-height: 0px; overflow:hidden;  max-height: 0px !important; overflow:hidden !important; display: none; display: none !important;}

      @media only screen and (max-width: 640px)  {
          body[yahoo] .deviceWidth {width:600px!important; padding:0;}
          body[yahoo] .center {text-align: center!important; display:block; margin-left:auto; margin-right:auto;}
          body[yahoo] .desktop-hidden { max-height: 0px; overflow:hidden;  max-height: 0px !important; overflow:hidden !important; display: none; display: none !important;}
           body[yahoo] .mobile-bg{background-color:#ffffff!important}
           body[yahoo] .linkColor { color: #d8d8d8!important;text-decoration: none!important;}
    
      }

      @media only screen and (max-width: 479px) {

          body[yahoo] .mobile-font{font-size: 11px!important;color:#777777!important;}
          body[yahoo] .mobile-font2{font-size: 14px!important;color:#666666!important;}
          body[yahoo] .mobile-font22{font-size: 22px!important;color:#4d4d4d!important;display:block!important;}
          body[yahoo] .mobile-font20{font-size: 20px!important;color:#4d4d4d!important;display:block!important;}
          body[yahoo] .mobile-font14{font-size: 14px!important;color:#4d4d4d!important;display:block!important;}
    body[yahoo] .mobile-font10{font-size: 10px!important;color:#aaaaaa!important;display:block!important;}
           body[yahoo] .mobile-font12{font-size: 12px!important;color:#4d4d4d!important;display:block!important;}
           body[yahoo] .mobile-font16{font-size: 16px!important;color:#4d4d4d!important;display:block!important;}
            body[yahoo] .mobile-font24{font-size: 24px!important;color:#4d4d4d!important;display:block!important;}
             body[yahoo] .mobile-font24c{font-size: 24px!important;color:#fff!important;display:block!important;}
          body[yahoo] .mobile-font22c{font-size: 22px!important;color:#ffffff!important;display:block!important;}
          body[yahoo] .mobile-font14c{font-size: 14px!important;color:#ffffff!important;display:block!important;}
          body[yahoo] .mobile-font16c{font-size: 16px!important;color:#ffffff!important;display:block!important;}
           body[yahoo] .mobile-font12c{font-size: 12px!important;color:#ffffff!important;display:block!important;}
          body[yahoo] .mobile-link{color:#f47d31!important;}
          body[yahoo] .mobile-bg{background-color:#ffffff!important}
          body[yahoo] .center {text-align: center!important;}
          body[yahoo] .deviceWidth {width:320px!important; padding:0;}
          body[yahoo] .mobile-hidden { display:none !important; }
          body[yahoo] .desktop-hidden { max-height: none; overflow:visible;  max-height: none !important; overflow:visible!important; display: block; display: block !important;}
          body[yahoo] .linkColor { color: #d8d8d8!important;text-decoration: none!important;}
      }

      /***** SMARTPHONE STYLING RULES *****/
      @media only screen and (max-width: 600px) {
           body[yahoo] .mobile-font{font-size: 11px!important;color:#777777!important;}
          body[yahoo] .mobile-font2{font-size: 14px!important;color:#666666!important;}
          body[yahoo] .mobile-font22{font-size: 22px!important;color:#4d4d4d!important;display:block!important;}
          body[yahoo] .mobile-font20{font-size: 20px!important;color:#4d4d4d!important;display:block!important;}
          body[yahoo] .mobile-font14{font-size: 14px!important;color:#4d4d4d!important;display:block!important;}
           body[yahoo] .mobile-font12{font-size: 12px!important;color:#4d4d4d!important;display:block!important;}
           body[yahoo] .mobile-font16{font-size: 16px!important;color:#4d4d4d!important;display:block!important;}
            body[yahoo] .mobile-font24{font-size: 24px!important;color:#4d4d4d!important;display:block!important;}
             body[yahoo] .mobile-font24c{font-size: 24px!important;color:#fff!important;display:block!important;}
          body[yahoo] .mobile-font22c{font-size: 22px!important;color:#ffffff!important;display:block!important;}
          body[yahoo] .mobile-font14c{font-size: 14px!important;color:#ffffff!important;display:block!important;}
          body[yahoo] .mobile-font16c{font-size: 16px!important;color:#ffffff!important;display:block!important;}
           body[yahoo] .mobile-font12c{font-size: 12px!important;color:#ffffff!important;display:block!important;}
          body[yahoo] .mobile-link{color:#f47d31!important;}
          body[yahoo] .mobile-bg{background-color:#ffffff!important}
          body[yahoo] .center {text-align: center!important;}
          body[yahoo] .deviceWidth {width:320px!important; padding:0;}
          body[yahoo] .mobile-hidden { display:none !important; }
          body[yahoo] .desktop-hidden { max-height: none; overflow:visible;  max-height: none !important; overflow:visible!important; display: block; display: block !important;}
          body[yahoo] .linkColor { color: #d8d8d8!important;text-decoration: none!important;}
    
      }
</style>
</head>

<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" yahoo="fix" style="font-family: arial, sans-serif;" bgcolor="#ffffff">

<!-- Wrapper -->
<table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" bgcolor="#ffffff">
  <tbody>
    <tr>
      <!-- Wrapper -->
      <td width="100%" valign="top" style="padding-top:0px;margin:0;border:0;vertical-align: top;">
        <!-- Wrapper -->

        <!-- Begin HEADER Desktop Content -->
        <div class="mobile-hidden">
          <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile-hidden" bgcolor="#ffffff">
            <tbody>
              <tr>
                <td style="min-width: 600px;"></td>
              </tr>
              <tr>
                <td style="font-size: 0;background: #ffffff;" align="center">

                  <a href="https://www.edustripe.com" target="_blank" conversion="true" alias="">
                    <img src="https://res.cloudinary.com/www-edustripe-com/image/upload/v1563031510/Edustripe-01_tn48bs.jpg" width="300" style=" display: block; max-width: 300px; width: 300px;margin:0 auto;" border="0" alt="">
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!--END DESKTOP HEADER-->
        <!--Mobile HEADER-->
        <div class="desktop-hidden" style="max-height: 0px; overflow:hidden; display:none;">
          <table width="600" cellpadding="0" cellspacing="0" align="center" class="desktop-hidden deviceWidth" bgcolor="#ffffff" padding="0" margin="0" border="0" style="max-height: 0px; overflow:hidden; display:none; margin-left:auto; margin-right:auto; width:0px;">
            <tbody>
              <tr>
                <td style="font-size:0;" class="deviceWidth">

                </td>
              </tr>
              <tr>

                <td style="font-size: 0;padding: 20px 0;margin-top: 20px;">
                  <a href="https://www.edustripe.com" target="_blank" conversion="true" alias="">
                    <img src="https://res.cloudinary.com/www-edustripe-com/image/upload/v1563031510/Edustripe-01_tn48bs.jpg" style="max-width: 120px; width: 120px;display: block;margin: 0 auto;" class="desktop-hidden deviceWidth" border="0" alt="">
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--END Mobile HEADER-->
      </td>
    </tr>
    <tr>
      <td width="100%" valign="top" style="padding-top:0px;margin:0;border:0;vertical-align: top;">
        <!--END OF TOP PART-->
        <!--BEGIN CONTENTS-->
        <!--BEGIN DESKTOP CONTENTS-->
        <div class="mobile-hidden">
          <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile-hidden" bgcolor="#ffffff">
            <tbody>
              <tr>
                <td style="min-width: 600px"></td>
              </tr>
              <tr>

                <td style="font-size: 0;background: #ffffff; width: 552px; padding:24px 24px 32px;" align="center">
                  <p style="line-height:28px;font-family: Arial Regular, sans-serif; font-size: 16px; letter-spacing:.8px; color: #605f5d;">


                    Welcome To Edustripe! A team member will be with you shortly. In the mean time, would you please verify your email address? We're glad to have you on board!</p>
                </td>

              </tr>
              <tr>
                <td style="font-size: 0;background: #ffffff;padding:0px 0px 32px 0px;" align="center">

                  <a href="${process.env.SERVER_URL}" target="_blank" conversion="true" alias="">
                    <img src="http://hosting.fyleio.com/35437/public/Master%20template%20images/Buttons/start_now_desktop.png" width="360" style=" display: block; max-width: 360px; width: 360px;margin:0 auto;" border="0" alt="">
                  </a>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
        <!--END DESKTOP CONTENTS-->
        <!--BEGIN MOBILE CONTENTS-->
        <div class="desktop-hidden" style="max-height: 0px; overflow:hidden; display:none;">
          <table width="600" cellpadding="0" cellspacing="0" align="center" class="desktop-hidden deviceWidth" bgcolor="#ffffff" padding="0" margin="0" border="0" style="max-height: 0px; overflow:hidden; display:none; margin-left:auto; margin-right:auto; width:0px">
            <tbody>
              <tr>
                <td style="font-size:0;" class="deviceWidth">

                </td>
              </tr>
              <tr>

                <td style="font-size: 0;padding: 32px 0 32px 0;">
                  <a href="https://www.edustripe.com" target="_blank" conversion="true" alias="">
                    <img src="http://hosting.fyleio.com/35437/public/Marketing/2017Sleep/Email_PM-v2.gif" style="max-width: 320px; width: 320px;display: block;margin: 0 auto;" class="desktop-hidden deviceWidth" border="0" alt="">
                  </a>
                </td>
              </tr>
              <tr>
                <td align="center">
                  <span class="mobile-font14" style="line-height: 28px;margin-left:16px;margin-top: 0px;margin-right: 16px;margin-bottom: 0px;padding: 32px;font-family: arial, sans-serif; font-size: 0px; color: #4d4d4d;background: #fff;">
                                  
                                  
                            
                       
                                 
                               
                             Welcome To Edustripe! A team member will be with you shortly. In the mean time, would you please verify your email address? We're glad to have you on board!

                          </span>
                </td>
              </tr>

              <tr>

                <td style="font-size: 0;padding: 0px 0px 16px 0px;">
                  <a href="${process.env.SERVER_URL}" target="_blank" conversion="true" alias="">
                    <img src="http://hosting.fyleio.com/35437/public/Master%20template%20images/Buttons/start_now_mobile.png" style="max-width: 256px; width: 256px;display: block;margin: 0 auto;" class="desktop-hidden deviceWidth" border="0" alt="">
                  </a>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
        <!--END MOBILE CONTENTS-->
        <!--END CONTENTS-->
        <!--BEGIN BOTTOM PART-->
      </td>
    </tr>
    <tr>
      <td width="100%" valign="top" style="padding-top:0px;margin:0;border:0;vertical-align: top;">


        <!-- Begin FOOTER Desktop Content -->
        <div class="mobile-hidden">
          <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="mobile-hidden" bgcolor="#ffffff">
            <tbody>
              <tr>
                <td style="min-width: 600px"></td>
              </tr>
              <tr>

                <td style="font-size: 0; padding: 20px 0; " align="center" bgcolor="#ffffff">

                  <table width="100%" border="0" cellspacing="0" cellpadding="0" class="mobile-hidden">
                    <tbody>
                      <tr>
                        <td style="font-size:0;padding: 20px 0;" align="center">
                          <table width="176" height="1" border="0" cellspacing="0" cellpadding="0" class="mobile-hidden">
                            <tbody>
                              <tr>

                                <td width="176" height="1" style="font-size:0;" bgcolor="#D8D8D8">

                                </td>

                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="font-size:0;" align="center">
                          <table width="176" border="0" cellspacing="0" cellpadding="0" class="mobile-hidden">
                            <tbody>
                              <tr>
                                <td width="63" class="img-center" style="font-size:0pt; line-height:0pt; text-align:center">
                                  <a href="https://www.facebook.com/Edustripe" target="_blank"><img border="0" src="http://hosting.fyleio.com/35437/public/Master%20template%20images/Social_Icon_Facebook.png" alt="" width="13" height="24"></a>
                                </td>
                                <td width="63" class="img-center" style="font-size:0pt; line-height:0pt; text-align:center">
                                  <a href="https://www.instagram.com/edustripe/" target="_blank"><img border="0" src="http://hosting.fyleio.com/35437/public/Master%20template%20images/Social_Icon_Instagram.png" alt="" width="24"></a>
                                </td>


                                <td width="63" class="img-center" style="font-size:0pt; line-height:0pt; text-align:center">
                                  <a href="https://twitter.com/edustripe" target="_blank"><img border="0" src="http://hosting.fyleio.com/35437/public/Master%20template%20images/Social_Icon_Twitter.png" alt="" width="24"></a>
                                </td>
                                <td width="63" class="img-center" style="font-size:0pt; line-height:0pt; text-align:center">
                                  <a href="https://www.youtube.com/user/edustripe" target="_blank"><img border="0" src="http://hosting.fyleio.com/35437/public/Master%20template%20images/Social_Icon_Youtube.png" alt="" width="24"></a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                </td>
              </tr>
              <tr>
                <td align="center" style="font-size: 0;" bgcolor="#ffffff">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" class="mobile-hidden">
                    <tbody>
                      <tr>
                        <td class="img" style="font-size:0pt; line-height:0pt; text-align:left" width="120"></td>
                        <td width="360" style="font-size:0pt;" align="center">
                          <div class="text-footer" style="color:#d8d8d8; font-family:Arial; font-size:12px; line-height:22px; text-align:center;width:360px"><a href="https://www.edustripe.com" class="link-footer" style="color:#605f5d; text-decoration:none" target="_blank"><span class="link-footer" style="color:#d8d8d8; text-decoration:none">Edustripe</span></a>                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="https://www.headspace.com/how-it-works?utm_source=trialist&amp;utm_medium=email&amp;utm_content=SleepAM&amp;utm_campaign=2017Sleep" class="link-footer"
                              style="color:#d8d8d8; text-decoration:none" target="_blank"><span class="link-footer" style="color:#d8d8d8; text-decoration:none">How it works</span></a> <span class="mobile-block"><span class="hide-for-mobile">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span>
                            <a href="https:/www.edustripe.com" class="link-footer" style="color:#605f5d; text-decoration:none" target="_blank"><span class="link-footer" style="color:#d8d8d8; text-decoration:none">FAQs</span></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="https://www.edustripe.com"
                              class="link-footer" style="color:#605f5d; text-decoration:none" target="_blank"><span class="link-footer" style="color:#d8d8d8; text-decoration:none">T&amp;Cs</span></a></div>
                          <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">
                            <tbody>
                              <tr>
                                <td height="26" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td>
                              </tr>
                            </tbody>
                          </table>


                          <div class="link-footer linkColor" style="color:#aaaaaa; font-family:Arial; font-size:10px; line-height:12px; text-align:center;width:360px">
                            You have received this email as a registered user of <a href="https://edustripe.com" class="link-footer" style="color:#aaaaaa; text-decoration:none"
                              target="_blank"><strong class="link-footer" style="color:#aaaaaa; text-decoration:none">Edustripe.com</strong></a><br></span>
                          </div>
                          <table width="100%" border="0" cellspacing="0" cellpadding="0" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">
                            <tbody>
                              <tr>
                                <td height="26" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td>
                              </tr>
                            </tbody>
                          </table>

                        </td>
                        <td class="img" style="font-size:0pt; line-height:0pt; text-align:left" width="120"></td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!--END DESKTOP FOOTER-->
        <!--Mobile FOOTER-->
        <div class="desktop-hidden" style="max-height: 0px; overflow:hidden; display:none;">
          <table width="600" cellpadding="0" cellspacing="0" align="center" class="desktop-hidden deviceWidth mobile-bg" padding="0" margin="0" border="0" style="max-height: 0px; overflow:hidden; display:none; margin-left:auto; margin-right:auto; width:0px">
            <tbody>
              <tr>
                <td style="font-size: 0; padding: 22px 0;" align="center">
                  <table width="100%" height="2" class="desktop-hidden deviceWidth img-center mobile-bg" style="max-height: 0px; overflow:hidden; display:none; margin: 0 auto; width:0px">
                    <tbody>
                      <tr>
                        <td style="font-size: 0pt;" width="72">

                        </td>
                        <td style="font-size: 0pt;background: #d8d8d8;height:1px;" height="2" width="176">

                        </td>
                        <td style="font-size: 0pt;" width="72">

                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="font-size: 0; padding: 22px 0;" align="center">

                  <table width="176" border="0" cellspacing="0" cellpadding="0" class="desktop-hidden deviceWidth img-center" style="max-height: 0px; overflow:hidden; display:none; margin: 0 auto; width:0px">
                    <tbody>
                      <tr>
                        <td style="font-size: 0;" width="34"></td>
                        <td style="font-size: 0;" width="63" align="center">
                          <a href="https://www.facebook.com/edustripe" target="_blank"><img border="0" src="http://hosting.fyleio.com/35437/public/Master%20template%20images/Social_Icon_Facebook.png" alt="" height="24" class="img-center"></a>
                        </td>
                        <td style="font-size: 0;" width="63" align="center">
                          <a href="https://www.instagram.com/edustripe/" target="_blank"><img border="0" src="http://hosting.fyleio.com/35437/public/Master%20template%20images/Social_Icon_Instagram.png" alt="" height="24" class="img-center"></a>
                        </td>


                        <td style="font-size: 0;" width="63" align="center">
                          <a href="https://twitter.com/edustripe" target="_blank"><img border="0" src="http://hosting.fyleio.com/35437/public/Master%20template%20images/Social_Icon_Twitter.png" alt="" height="24" class="img-center"></a>
                        </td>
                        <td style="font-size: 0;" width="63" align="center">
                          <a href="https://www.youtube.com/user/edustripe" target="_blank"><img border="0" src="http://hosting.fyleio.com/35437/public/Master%20template%20images/Social_Icon_Youtube.png" alt="" height="24" class="img-center"></a>
                        </td>
                        <td style="font-size: 0;" width="34"></td>
                      </tr>
                    </tbody>
                  </table>


                </td>
              </tr>
              <tr>
                <td align="center" style="font-size: 0;">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" class="desktop-hidden deviceWidth mobile-bg" style="max-height: 0px; overflow:hidden; display:none; margin-left:auto; margin-right:auto; width:0px">
                    <tbody>
                      <tr>
                        <td style="font-size: 0;" class="img" width="10"></td>
                        <td style="font-size: 0;">
                          <div class="text-footer" style="color:#d8d8d8; font-family:Arial; font-size:12px; line-height:22px; text-align:center"><a href="https://www.headspace.com/?utm_source=trialist&amp;utm_medium=email&amp;utm_content=SleepAM&amp;utm_campaign=2017Sleep" class="link-footer" style="color:#605f5d; text-decoration:none" target="_blank"><span class="link-footer" style="color:#d8d8d8; text-decoration:none">Edustripe</span></a>                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <a href="https://www.edustripe.com" class="link-footer" style="color:#d8d8d8; text-decoration:none" target="_blank"><span class="link-footer" style="color:#d8d8d8; text-decoration:none">How it works</span></a>                              <br> <span class="mobile-block"><span class="hide-for-mobile"></span></span> <a href="https://help.headspace.com/hc/en-us?utm_source=trialist&amp;utm_medium=email&amp;utm_content=SleepAM&amp;utm_campaign=2017Sleep" class="link-footer"
                              style="color:#d8d8d8; text-decoration:none" target="_blank"><span class="link-footer" style="color:#d8d8d8; text-decoration:none">FAQs</span></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="https://www.edustripe.com"
                              class="link-footer" style="color:#d8d8d8; text-decoration:none" target="_blank"><span class="link-footer" style="color:#d8d8d8; text-decoration:none">T&amp;Cs</span></a></div>
                          <table width="100%" border="0" cellspacing="0" cellpadding="0" class="desktop-hidden deviceWidth mobile-bg" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">
                            <tbody>
                              <tr>
                                <td height="26" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td>
                              </tr>
                            </tbody>
                          </table>
                          <table width="100%" border="0" cellspacing="0" cellpadding="0" class="desktop-hidden deviceWidth mobile-bg" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">
                            <tbody>
                              <tr>
                                <td height="26" class="spacer" style="font-size:0pt; line-height:0pt; text-align:center; width:100%; min-width:100%">&nbsp;</td>
                              </tr>
                            </tbody>
                          </table>

                        </td>
                        <td class="img" style="font-size:0pt; line-height:0pt; text-align:left" width="10"></td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--END MOBILE FOOTER-->
      </td>
    </tr>
  </tbody>
</table>

</body>`;

export default verifyEmal;
