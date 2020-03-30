<template>
  <div>
    <!-- 头部导航条 -->
    <navigateBar title="编辑资料" :show='false'></navigateBar>
    <!-- ‘用户头像部分 -->
    <div class="user-img">
      <img :src="$axios.defaults.baseURL+userData.head_img" alt />
      <van-uploader :after-read="afterRead" class="upload" />
    </div>
    <!-- 用户资料 -->
    <Listbar label="昵称" :tips="userData.nickname" @click.native="show = true"></Listbar>
    <van-dialog v-model="show" title="修改昵称" show-cancel-button @confirm="handleuser">
      <van-cell-group>
        <van-field v-model="value" :placeholder="userData.nickname" />
      </van-cell-group>
    </van-dialog>
    <Listbar label="密码" tips="********" @click.native="password = true"></Listbar>
    <van-dialog v-model="password" title="修改密码" show-cancel-button @confirm="handlepassword">
      <van-cell-group>
        <van-field v-model="password_value" type="password" placeholder="*****" />
      </van-cell-group>
    </van-dialog>
    <Listbar label="性别" :tips="['女','男'][userData.gender]" @click.native="genders = true"></Listbar>
    <van-action-sheet v-model="genders" :actions="actions" @select="onSelect" />
  </div>
</template>

<script>
// import { Toast } from 'vant';
import navigateBar from "@/components/navigateBar";
import Listbar from "@/components/Listbar";
export default {
  data() {
    return {
      userData: {},
      userInfo: {}, // 用户详情资料
      show: false, // 昵称弹框
      value: "",
      password: false, //密码弹框
      password_value: "",
      genders: false,
      genders_value: "",
      actions: [
        { name: "男", str: 1 },
        { name: "女", str: 0 }
      ]
    };
  },
  mounted() {
    const userInfo = JSON.parse(localStorage.getItem("uesr")) || {};
    // console.log(uesrInfo.user.id);

    this.userInfo = userInfo;

    this.$axios({
      url: "/user/" + userInfo.user.id,
      headers: {
        Authorization: userInfo.token
      }
    }).then(res => {
      const { data } = res.data;
      this.userData = data;
    });
  },
  components: {
    navigateBar,
    Listbar
  },
  methods: {
    afterRead(file) {
      const formData = new FormData();
      formData.append("file", file.file);
      // 此时可以自行将文件上传至服务器
      console.log(file);
      this.$axios({
        url: "/upload/",
        method: "post",
        headers: {
          Authorization: this.userInfo.token
        },
        data: formData
      }).then(res => {
        console.log(res);
        const { url } = res.data.data;
        this.userData.head_img = url;
        this.handleclick({ head_img: url });
      });
      // console.log(this.flies);
    },
    handleclick(data) {
      this.$axios({
        url: "/user_update/" + this.userInfo.user.id,
        method: "post",
        headers: {
          Authorization: this.userInfo.token
        },
        data
      }).then(res => {
        // console.log(res);
        // const {data} = res.data
        // this.userData=data
        this.$toast.success("修改成功");
      });
    },
    handleuser() {
      this.handleclick({ nickname: this.value });
      this.userData.nickname = this.value;
    },
    handlepassword() {
      this.handleclick({ password: this.password_value });
      this.$router.push("/login");
    },
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.handleclick({ gender: item.str });
      this.userData.gender = item.str;
    }
  }
};
</script>

<style  scoped lang='less'>
.user-img {
  display: flex;
  position: relative;
  width: 100%;
  height: 140/360 * 100vw;
  justify-content: center;
  align-items: center;
  img {
    width: 70/360 * 100vw;
    height: 70/360 * 100vw;
    border-radius: 50%;
    object-fit: cover;
  }
  .upload {
    position: absolute;
    width: 100/360 * 100vw;
    height: 100/360 * 100vw;
    top: 50%;
    left: 50%;
    transform: translateX(-50 / 360 * 100vw) translateY(-50 / 360 * 100vw);
    opacity: 0;
  }
}
</style>