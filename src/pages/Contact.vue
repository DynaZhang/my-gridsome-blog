<template>
    <Layout>
        <!-- Page Header -->
        <header class="masthead" style="background-image: url('img/contact-bg.jpg')">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-10 mx-auto">
                        <div class="page-heading">
                            <h1>Contact Me</h1>
                            <span class="subheading">Have questions? I have answers.</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- Main Content -->
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-10 mx-auto">
                    <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
                    <!-- Contact Form - Enter your email address on line 19 of the mail/contact_me.php file to make this form work. -->
                    <!-- WARNING: Some web hosts do not allow emails to be sent through forms to common mail hosts like Gmail or Yahoo. It's recommended that you use a private domain email address! -->
                    <!-- To use the contact form, your site must be on a live web host with PHP! The form will not work locally! -->
                    <form name="sentMessage" id="contactForm" novalidate>
                        <div class="control-group">
                            <div class="form-group floating-label-form-group controls">
                                <label>Name</label>
                                <input type="text" v-model="formMessage.name" class="form-control" placeholder="Name" required data-validation-required-message="Please enter your name.">
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="control-group">
                            <div class="form-group floating-label-form-group controls">
                                <label>Email Address</label>
                                <input type="email" v-model="formMessage.email_address" class="form-control" placeholder="Email Address" required data-validation-required-message="Please enter your email address.">
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="control-group">
                            <div class="form-group col-xs-12 floating-label-form-group controls">
                                <label>Phone Number</label>
                                <input type="tel" v-model="formMessage.phone_number" class="form-control" placeholder="Phone Number" required data-validation-required-message="Please enter your phone number.">
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="control-group">
                            <div class="form-group floating-label-form-group controls">
                                <label>Message</label>
                                <textarea rows="5" v-model="formMessage.message" class="form-control" placeholder="Message" required data-validation-required-message="Please enter a message."></textarea>
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <br>
                        <div id="success"></div>
                        <button type="button" class="btn btn-primary" @click="handleSend">Send</button>
                    </form>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
import {addContact} from '../apis/contact';
export default {
    name: 'Contact',
    data() {
        return {
            formMessage: {
                name: '',
                email_address: '',
                phone_number: '',
                message: ''
            }
        };
    },
    methods: {
        async handleSend() {
            try {
                const params = Object.assign({}, this.formMessage);
                await addContact(params);
                alert('发送成功');
            } catch (e) {
                alert('发送失败');
            }
        }
    }
}
</script>

<style scoped>

</style>