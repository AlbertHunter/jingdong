<template>
    <div class="wrapper">
        <img class="wrapper__img" src="@/assets/images/user.png"/>
        <div class="wrapper__input">
            <input
            class="wrapper__input__content"
            placeholder="请输入手机号"
            v-model="username"
            />
        </div>
        <div class="wrapper__input">
            <input
            type="password"
            class="wrapper__input__content"
            placeholder="请输入密码"
            v-model="password"
            />
        </div>
        <div class="wrapper__login__button" @click="handleLogin">登陆</div>
        <div class="wrapper__login__link" @click="handleRegisterClick">立即注册</div>
        <Toast v-if="show" :message="toastMessage"/>
</div>
</template>
<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '../../utils/request'
import Toast, { useToastEffect } from '../../components/Toast'
const useLoginEffeft = (showToast) => {
  const router = useRouter()
  const data = reactive({
    username: '',
    password: ''
  })
  const handleLogin = async () => {
    if (data.username === '' || data.password === '') {
      showToast('参数不能为空')
      return false
    }
    try {
      const result = await post('/api/user/login', {
        username: data.username,
        password: data.password
      })
      console.log(result)
      if (result?.code === 200) {
        localStorage.isLogin = true
        showToast('登陆成功')
        setTimeout(() => {
          router.push({ name: 'Home' })
        }, 1000)
      } else {
        showToast(result?.msg || '登陆失败')
      }
    } catch (e) {
      console.log(e)
      showToast('请求失败')
    }
  }
  const { username, password } = toRefs(data)
  return { username, password, handleLogin }
}
const useRegisterEffect = () => {
  const router = useRouter()
  const handleRegisterClick = () => {
    router.push({ name: 'Register' })
  }
  return { handleRegisterClick }
}
export default {
  name: 'Login',
  components: { Toast },
  setup () {
    const { show, toastMessage, showToast } = useToastEffect()
    const { username, password, handleLogin } = useLoginEffeft(showToast)
    const { handleRegisterClick } = useRegisterEffect()
    return { handleLogin, handleRegisterClick, username, password, show, toastMessage }
  }
}
</script>
<style lang="scss" scoped>
@import "../../style/viriables.scss";
.wrapper {
    position:absolute;
    top:50%;
    left:0;
    right: 0;
    transform: translateY(-50%);
    &__img {
        display: block;
        margin:0 auto .4rem auto;
        width:.66rem;
        height: .66rem;
    }
    &__input {
        background: #f9f9f9;
        height:.48rem;
        margin:0 .4rem .16rem .4rem;
        padding:0 .16rem;
        border: 1px solid rgba(0,0,0,0.10);
        border-radius: 6px;
        &__content {
            line-height: .48rem;
            border:none;
            outline:none;
            width: 100%;
            background: none;
            font-size:.16rem;
            color:$content-notice-fontcolor;
            &::placeholder {
                color:$content-notice-fontcolor
            }
        }
    }
    &__login__button {
        margin:.3rem .4rem .16rem .4rem;
        line-height: .48rem;
        background: #0091ff;
        box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,0.32);
        border-radius: .04rem;
        color:#fff;
        font-size:.16rem;
        text-align: center;
    }
    &__login__link {
        text-align: center;
        font-size:.14rem;
        color:$content-notice-fontcolor;
    }
}
</style>
