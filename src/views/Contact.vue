<template>
  <div>
    <el-affix :offset="0">
      <Header :active="'/contact'" />
    </el-affix>

    <div style="padding: 0 10%; display: flex; justify-content: center">
      <div
        class="bg-white p-20 contact-container"
        style="text-align: left; width: 50%; min-height: 80vh"
      >
        <div class="m-b-20">
          <span class="main-title">Contactez-nous</span>
        </div>

        <el-form
          ref="contactForm"
          @submit.prevent="handleSubmit"
          model="contactForm"
          :rules="rules"
        >
          <el-form-item label="Prénom" prop="firstName">
            <el-input v-model="contactForm.firstName"></el-input>
          </el-form-item>
          <el-form-item label="Nom" prop="lastName">
            <el-input v-model="contactForm.lastName"></el-input>
          </el-form-item>
          <el-form-item label="Adresse" prop="address">
            <el-input v-model="contactForm.address"></el-input>
          </el-form-item>
          <el-form-item label="Téléphone" prop="phone">
            <el-input v-model="contactForm.phone"></el-input>
          </el-form-item>
          <el-form-item label="Email" prop="email">
            <el-input v-model="contactForm.email"></el-input>
          </el-form-item>
          <el-form-item label="Message" prop="message">
            <el-input type="textarea" v-model="contactForm.message"></el-input>
          </el-form-item>
          <el-form-item class="submit-button">
            <div class="centered">
            <el-button type="primary" size="large">Envoyer</el-button>
          </div>
          </el-form-item>
        </el-form>

        <div class="contact-info">
          <p class="info-title">Nos informations:</p>
          <p><strong>Téléphone:</strong>+33 7 84 96 60 10 / +33 7 50 60 47 50</p>
          <p><strong>Adresse:</strong>30-32 Av. de la République, 94800 Villejuif, France</p>
          <p><strong>Email:</strong>haicheng.wang@efrei.net / zongrui.xue@efrei.net / zhongtian.fan@efrei.net</p>
          
        </div>
      </div>
    </div>

    <div class="footer-box f-12 bg-primary">
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      contactForm: {
        firstName: "",
        lastName: "",
        address: "",
        phone: "",
        email: "",
        message: "",
      },
      rules: {
        firstName: [
          {
            required: true,
            message: "Veuillez entrer votre prénom",
            trigger: "blur",
          },
        ],
        lastName: [
          {
            required: true,
            message: "Veuillez entrer votre nom",
            trigger: "blur",
          },
        ],
        address: [
          {
            required: true,
            message: "Veuillez entrer votre adresse",
            trigger: "blur",
          },
        ],
        phone: [
          {
            required: true,
            message: "Veuillez entrer votre téléphone",
            trigger: "blur",
          },
        ],
        email: [
          {
            required: true,
            message: "Veuillez entrer votre email",
            trigger: "blur",
          },
          {
            type: "email",
            message: "Veuillez entrer un email valide",
            trigger: "blur",
          },
        ],
        message: [
          {
            required: true,
            message: "Veuillez entrer votre message",
            trigger: "blur",
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
body {
  background-color: #cacaca55;
}

.footer-box,
.contact-container {
  height: 40px;
  line-height: 40px;
  color: #ffffff;
}
.submit-button .centered {
    text-align: center; // This will center the button within the form item
    width: 100%;
}

.contact-info {
  margin-top: 100px;
  color: black;
  text-align: center; // Center-align the contact information

  .info-title {
    font-size: 20px;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 10px;

    strong {
      margin-right: 10px;
    }
  }
}

.main-title {
  color: black;
  font-size: 24px;
  font-weight: bold;
}
</style>
