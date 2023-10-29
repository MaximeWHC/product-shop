/* eslint-disable no-console, no-alert */
<template>
  <div class="c-white m-t-60">
    <h1 class="m-40">S'identifier</h1>
    <div class="m-t-48 m-l-40 m-r-60">
      <el-form
        :model="form"
        ref="form"
        :rules="rules"
        label-width="50px"
        class="form-box"
      >
        <el-form-item label="Identifiant" size="large" prop="name">
          <el-input
            v-model="form.name"
            size="large"
            maxlength="20"
            clearable
            placeholder="téléphone / e-mail"
          />
        </el-form-item>
        <el-form-item label="MDP" size="large" prop="pass">
          <el-input
            v-model="form.pass"
            size="large"
            maxlength="20"
            type="password"
            show-password
            clearable
            placeholder="votre mot de passe"
          />
        </el-form-item>
        <el-form-item>
          <slot name="cut"></slot>
        </el-form-item>
        <el-form-item>
          <el-button
            type="warning"
            size="large"
            style="width: 100%"
            @click="onSubmit('form')"
            >Se connecter</el-button
          ><br />
          <el-button
            type="warning"
            size="large"
            style="width: 100%"
            @click="onSubmitMicrosoft"
            >Continuer avec Microsoft</el-button
          ><br /><br />
          <!--<el-button
            type="warning"
            size="large"
            style="width: 100%"
            @click="onSubmitGoogle"
            >Continuer avec Google</el-button
          >--><div v-if="user">
        <p>Bonjour, {{ user.name }}</p>
      </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { signInAndGetUser } from "@/lib/microsoftGraph.js";
import { ElMessage } from "element-plus";

export default {
  name: "SignIn",
  
  data() {
    return {
      user: null,
      form: {
        name: "",
        pass: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "Identifiant ne peut pas être vide",
            trigger: "change",
          },
        ],
        pass: [
          {
            required: true,
            message: "Le mot de passe ne peut pas être vide",
            trigger: "change",
          },
        ],
      },
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.form.name == "admin") {
            this.$store.commit('SET_USER', { name: 'admin' }); 
            ElMessage({
              message: "Connexion réussie !",
              type: "success",
              duration: 1000,
              onClose: () => {
                this.$router.push({ path: "/home" }).catch((error) => error);
              },
            });
          } else {
            ElMessage({
              message:
                "Le mot de passe du compte est erroné, veuillez réessayer.【ID: admin ; MDP: nimporte quoi】",
              type: "error",
              duration: 5000,
            });
          }
        } else {
          return false;
        }
      });
    },

    async onSubmitMicrosoft() {
      try {
        const user = await signInAndGetUser();
        if (user) {
          this.user = user;
          this.$store.commit('SET_USER', user);
          ElMessage({
            message: "Connexion réussie !",
            type: "success",
            duration: 1000,
            onClose: () => {
              this.$router.push({ path: "/home" }).catch((error) => error);
            },
          });
        } else {
          ElMessage({
            message:
              "Échec de la connexion avec Microsoft, veuillez réessayer !",
            type: "error",
            duration: 5000,
          });
        }
      } catch (error) {
        console.error("Error during sign in:", error);
        ElMessage({
          message: "Échec de la connexion avec Microsoft, veuillez réessayer !",
          type: "error",
          duration: 5000,
        });
      }
    },
  }
};
</script>

<style scoped lang="scss">
.form-box :deep(.el-form-item__label) {
  color: white;
}
</style>
