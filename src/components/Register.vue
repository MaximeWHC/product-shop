/* eslint-disable no-console, no-alert */
<template>
    <div class="c-white m-t-60">
        <h1 class="m-40">Inscription</h1>
        <div class="m-t-48 m-l-40 m-r-60">
            <el-form :model="form" ref="form" :rules="rules" label-width="50px" class="form-box">
                <el-form-item label="Identifiant" size="large" prop="name">
                    <el-input v-model="form.name" size="large" maxlength="20" clearable placeholder="téléphone / e-mail" />
                </el-form-item>
                <el-form-item label="MDP" size="large" prop="pass">
                    <el-input v-model="form.pass" size="large" maxlength="20" type="password" show-password clearable placeholder="votre mot de passe" />
                </el-form-item>
                <el-form-item label="Confirmer" size="large" prop="ck_pass">
                    <el-input v-model="form.ck_pass" size="large" maxlength="20" type="password" show-password clearable placeholder="confirmer le mot de passe" />
                </el-form-item>
                <el-form-item>
                    <slot name="cut"></slot>
                </el-form-item>
                <el-form-item>
                    <el-button type="warning" size="large" style="width: 100%" @click="onSubmit('form')">S'inscrire</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import { ElMessage } from 'element-plus'

export default {
  name: 'Register',
  data () {
    return {
      form: {
        name: '',
        pass: '',
        ck_pass: ''
      },
      rules: {
        name: [
          {
            required: true,
            message: 'Identifiant ne peut pas être vide',
            trigger: 'change'
          }
        ],
        pass: [
          {
            required: true,
            message: 'Le mot de passe ne peut pas être vide',
            trigger: 'change'
          }
        ],
        ck_pass: [
          {
            required: true,
            validator: this.validatePass2,
            trigger: 'change'
          }
        ]
      }
    }
  },
  methods: {
    validatePass2 (rule, value, callback) {
      if (value === '') {
        callback(new Error('Confirmer que le mot de passe ne peut pas être vide'))
      } else if (value !== this.form.pass) {
        callback(new Error('Les mots de passe saisis deux fois sont différents ! Veuillez réessayer'))
      } else {
        callback()
      }
    },
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          ElMessage({
            message: 'Inscription réussie !',
            type: 'success',
            duration: 1000,
            onClose: () => {
              this.$emit('success', true)
            }
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.form-box :deep(.el-form-item__label) {
    color: white;
}
</style>
