<template>
    <div>
        <div class="container" :class="{TransformPanel: isTransform}">
            <!--注册-->
            <div class="form-container register-container">
                <el-form ref="registerForm" :rules="rules" :model="registerForm" label-width="55px">
                    <h1>管理员注册</h1>
                    <br>
                    <el-form-item prop="username" label="账号">
                        <el-input v-model="registerForm.username"
                                  type="text"
                                  placeholder="账号">
                        </el-input>
                    </el-form-item>
                    <br>
                    <el-form-item prop="password" label="密码">
                        <el-input v-model="registerForm.password"
                                  type="password"
                                  placeholder="密码"
                                  show-password
                                  clearable>
                        </el-input>
                    </el-form-item>
                    <br>
                    <el-button :loading="loginLoading" @click="handleRegister()">注册</el-button>
                </el-form>
            </div>
            <!--登录-->
            <div class="form-container login-container">
                <el-form @submit.native.prevent ref="loginForm" :rules="rules" :model="loginForm" label-width="55px">
                    <h1>管理员登录</h1>
                    <br>
                    <el-form-item prop="username" label="账号">
                        <el-input v-model="loginForm.username"
                                  type="text"
                                  placeholder="账号">
                        </el-input>
                    </el-form-item>
                    <br>
                    <el-form-item prop="password" label="密码">
                        <el-input v-model="loginForm.password"
                                  type="password"
                                  placeholder="密码"
                                  show-password
                                  clearable>
                        </el-input>
                    </el-form-item>
                    <br>
                    <el-button :loading="loginLoading" @click="handleLogin()" native-type="submit">登录</el-button>
                </el-form>
            </div>
            <!--切换页面内容-->
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h1>已有帐号？</h1>
                        <p>赶紧去登录吧!</p>
                        <el-button @click="adminLogin" class="ghost">登陆</el-button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h1>没有帐号？</h1>
                        <p>点击注册去注册一个属于你的账号吧。</p>
                        <el-button @click="adminRegister" class="ghost">注册</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {generaMenu} from "../../assets/js/menu";
    import {adminLogin} from "../../api/user";

    export default {
        name: "TranslateLogin",
        data(){
            return {
                isTransform: false,
                loginLoading: false,
                registerForm:{
                    username: "",
                    password: "",
                },
                loginForm:{
                    username: "",
                    password: "",
                },
                rules: {
                    username: [
                        { required: true, message: "账号不能为空", trigger: ['blur','change'] },
                        { type: 'email', message: "请输入正确的邮箱格式", trigger: ['blur','change'] }
                    ],
                    password: [
                        { required: true, message: "密码不能为空", trigger: ['blur','change'] },
                        { min: 6, message: "密码不能少于6位", trigger: ['blur','change'] }
                    ]
                }
            }
        },
        methods: {
            adminRegister() {
                this.isTransform = true;
            },
            adminLogin() {
                this.isTransform = false;
            },
            executeLogin() {
                const that = this
                this.loginLoading = true
                //发送登录请求
                let param = new URLSearchParams();
                param.append("username", that.loginForm.username);
                param.append("password", that.loginForm.password);
                adminLogin(param).then(({ data }) => {
                    if (data.flag) {
                        // 登录后保存用户信息
                        this.$store.commit("login", data.data);
                        // 加载用户菜单
                        generaMenu();
                        this.$message.success("登录成功");
                        this.$router.push({ path: "/" });
                    } else {
                        this.$message.error(data.message);
                    }
                    this.loginLoading = false
                });
                setTimeout(() => {
                    this.loginLoading = false
                },1000)
            },
            handleLogin(){
                const that = this
                this.$refs['loginForm'].validate(valid =>{
                    if (valid) {
                        // eslint-disable-next-line no-undef
                        const captcha = new TencentCaptcha(
                            that.config.TENCENT_CAPTCHA,
                            function (res) {
                                if (res.ret === 0) {
                                    that.executeLogin()
                                }
                            }
                        );
                        // 验证失败，显示验证码
                        captcha.show();
                    }
                })
            },
            handleRegister() {
                this.loginLoading = true
                setTimeout(()=>{
                    this.$notify.error({
                        message: '注册失败!请联系管理员!',
                        duration: 1000
                    })
                    this.loginLoading = false
                },500)
            }
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    h1{
        margin: 0.2rem;
        font-size: 1.2rem;
    }
    p{
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 100;
        margin: 1.2rem 0;
        letter-spacing: 0.1rem;
    }
    span{
        font-size: 0.8rem;
        margin: 1.2rem 0;
    }
    .container{
        position: relative;
        background: #fff;
        border-radius: 10px;
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
        padding: 0.6rem;
        width: 50rem;
        height: 35rem;
        overflow: hidden;
        max-width: 100vw;
        min-height: 70vh;
        float: left;
        left: 23%;
        right: 23%;
        top: 100px;
        bottom: 100px;
        margin: 0.3rem;
        opacity: 0.7;
        z-index: 9;
    }
    .form-container form{
        background: #fff;
        display: flex;
        flex-direction: column;
        padding: 0 1.8rem;
        height: 100%;
        justify-content: center;
        align-items: center;
    }
    .form-container button:active {
        transform: scale(0.95, 0.95);
    }
    .form-container button {
        padding: 0.4rem 1rem;
        background: #417dff;
        color: white;
        border: 1px solid #fff;
        outline: none;
        cursor: pointer;
        width: 5rem;
        border-radius: 8px;
        transition: all 100ms ease-in;
        margin: 0.6rem 0;
        font-size: 0.9rem;
        padding: 0.5rem 0;
    }
    button.ghost {
        background: transparent;
        border-color: #fff;
        border: 1px solid #fff;
        outline: none;
        cursor: pointer;
        width: 5rem;
        border-radius: 8px;
        transition: all 100ms ease-in;
        margin: 0.6rem 0;
        padding: 0.5rem 0;
        color: white;
        font-size: 0.8rem;
    }
    button#send_code1 {
        width: 100%;
    }
    button.ghost:active {
        transform: scale(0.95, 0.95);
    }
    .form-container {
        position: absolute;
        top: 0;
        height: 100%;
        transition: all 0.5s ease-in;
    }
    .login-container {
        left: 0;
        width: 50%;
        z-index: 2;
    }
    .register-container {
        left: 0;
        width: 50%;
        opacity: 0;
        z-index: 1;
    }
    .overlay {
        background: #417dff;
        width: 200%;
        height: 100%;
        position: relative;
        left: -100%;
        transition: all 0.6s ease-in-out;
        color: white;
    }
    .overlay-container {
        position: absolute;
        top: 0;
        right: 0;
        width: 50%;
        height: 100%;
        overflow: hidden;
        transition: all 0.6s ease-in-out;
        z-index: 99;
    }
    .overlay-panel {
        position: absolute;
        top: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 100%;
        padding: 0 2.2rem;
    }
    .overlay-right {
        right: 0;
    }
    .container.TransformPanel .overlay-container {
        transform: translateX(-100%);
    }
    .container.TransformPanel .login-container {
        transform: translateX(100%);
    }
    .container.TransformPanel .register-container {
        transform: translateX(100%);
        opacity: 1;
        z-index: 5;
        transition: all 0.6s ease-in-out;
    }
    .container.TransformPanel .overlay {
        transform: translateX(50%);
    }
    .container.TransformPanel .overlay-left {
        transform: translateX(0);
        transition: all 0.6s ease-in-out;
    }
    .container.TransformPanel .overlay-right {
        transform: translateX(20%);
        transition: all 0.6s ease-in-out;
    }
    .el-form-item{
        width: 16rem;/*固定住表单的宽，避免长短不一*/
    }
    /*深度选择器，只修改局部样式*/
    .el-input /deep/ .el-input__inner{
        border-radius: 15px;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    }
</style>
