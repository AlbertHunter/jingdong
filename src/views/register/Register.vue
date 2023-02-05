<template>
    <div class="wrapper">
        <img class="wrapper__img" src="@/assets/images/user.png"/>
        <div class="wrapper__input">
            <input
            type="text"
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
            autocomplete="new-password"
            v-model="password"
            />
        </div>
        <div class="wrapper__input">
            <input
            type="password"
            class="wrapper__input__content"
            placeholder="确认密码"
            autocomplete="new-password"
            v-model="repassword"
            />
        </div>
        <div class="wrapper__register__button" @click="handleRegister">注册</div>
        <div class="wrapper__register__link" @click="handleLoginClick">已有账号去登录</div>
        <Toast v-if="show" :message="toastMessage"/>
</div>
</template>
<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '../../utils/request'
import Toast, { useToastEffect } from '../../components/Toast'

const useRegisterEffect = (showToast) => {
  const router = useRouter()
  const data = reactive({
    username: '',
    password: '',
    repassword: ''
  })
  const handleRegister = async () => {
    if (data.username === '' || data.password === '' || data.repassword === '') {
      showToast('参数不能为空')
      return false
    }
    if (data.password !== data.repassword) {
      showToast('确认密码错误')
      return false
    }
    try {
      const result = await post('/api/user/register', {
        username: data.username,
        password: data.password
      })
      if (result?.code === 200) {
        showToast('注册成功')
        setTimeout(() => {
          router.push({ name: 'Login' })
        }, 1000)
      } else {
        showToast(result?.msg || '注册失败')
      }
    } catch (e) {
      console.log(e)
      showToast('请求失败')
    }
  }
  const { username, password, repassword } = toRefs(data)
  return { username, password, repassword, handleRegister }
}
const useLoginEffeft = () => {
  const router = useRouter()
  const handleLoginClick = () => {
    router.push({ name: 'Login' })
  }
  return { handleLoginClick }
}
export default {
  name: 'Register',
  components: { Toast },
  setup () {
    const { show, toastMessage, showToast } = useToastEffect()
    const { username, password, repassword, handleRegister } = useRegisterEffect(showToast)
    const { handleLoginClick } = useLoginEffeft()
    return { username, password, repassword, show, toastMessage, handleRegister, handleLoginClick }
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
    &__register__button {
        margin:.3rem .4rem .16rem .4rem;
        line-height: .48rem;
        background: #0091ff;
        box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,0.32);
        border-radius: .04rem;
        color:#fff;
        font-size:.16rem;
        text-align: center;
    }
    &__register__link {
        text-align: center;
        font-size:.14rem;
        color:$content-notice-fontcolor;
    }
}
</style>
