const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail {
  constructor ({subject, recipients}, content) {
    super();

    //return an object we can use to communicate with sandgrid api
    this.sgApi = sendgrid(keys.sendGridKey);

    //sendgrid special setup
    this.from_email = new helper.Email('no-reply@lee5214.com');
    this.subject = subject;
    this.body = new helper.Content('text/html', content);
    this.recipients = this.formatAddresses(recipients);

    //build-in function from helper.Mail
    this.addContent(this.body);

    //helper functions I need to define
    this.addClickTracking(); //so sendgrid knows there are links in email need tracking
    this.addRecipients();
  }

  formatAddresses (recipients) {
    return recipients.map(({email}) => {
      return new helper.Email(email);
    });
  }

  addClickTracking () {
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }

  addRecipients () {
    const personalize = new helper.Personalization();
    this.recipients.forEach(recipient => {
      personalize.addTo(recipient);
    });
    this.addPersonalization(personalize);
  }

  async send () {
    const request = this.sgApi.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: this.toJSON()
    });

    const response =  await this.sgApi.API(request,(error,response)=>{
      //below for debug purposes
      /*if(error){
        console.log('error response received')
      }
      console.log(response.statusCode);
      console.log(response.body);
      console.log(response.headers);*/
    });
    return response;
  }
}

module.exports = Mailer;
