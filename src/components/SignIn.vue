/* eslint-disable no-console, no-alert */
<template>
    <div class="c-white m-t-60">
        <h1 class="m-40">登录</h1>
        <div class="m-t-48 m-l-40 m-r-60">
            <el-form :model="form" ref="form" :rules="rules" label-width="50px" class="form-box">
                <el-form-item label="账号" size="large" prop="name">
                    <el-input v-model="form.name" size="large" maxlength="20" clearable placeholder="请输入账号/手机号/邮箱" />
                </el-form-item>
                <el-form-item label="密码" size="large" prop="pass">
                    <el-input v-model="form.pass" size="large" maxlength="20" type="password" show-password clearable placeholder="请输入密码" />
                </el-form-item>
                <el-form-item>
                    <slot name="cut"></slot>
                </el-form-item>
                <el-form-item>
                    <el-button type="warning" size="large" style="width: 100%" @click="onSubmit('form')">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import { ElMessage } from 'element-plus'

export default {
  name: 'SignIn',
  data () {
    return {
      form: {
        name: '',
        pass: ''
      },
      rules: {
        name: [
          {
            required: true,
            message: '账号不能为空',
            trigger: 'change'
          }
        ],
        pass: [
          {
            required: true,
            message: '密码不能为空',
            trigger: 'change'
          }
        ]
      }
    }
  },
  methods: {
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.form.name == 'admin') {
            ElMessage({
              message: '登录成功！',
              type: 'success',
              duration: 1000,
              onClose: () => {
                this.$router.push({ path: '/home' }).catch((error) => error)
              }
            })
          } else {
            ElMessage({
              message: '账号密码错误，请重试！【账号： admin  ; 密码： 随意写】',
              type: 'error',
              duration: 5000
            })
          }
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
