<template>
    <section class="breadcrumb_section text-uppercase" :style="{ backgroundImage: `url(${innerHeroImg})` }">
    <div class="container">
      <h1 class="page_title text-white" data-wow-delay=".1s">個人資訊</h1>
      <ul class="breadcrumb_nav ul_li" data-wow-delay=".2s">
        <li><a href="index.html"><i class="fas fa-home"></i> 首頁</a></li>
        <li>個人資訊</li>
      </ul>
    </div>
    <div class="breadcrumb_icon_wrap">
      <div class="container">
        <div class="breadcrumb_icon" data-wow-delay=".3s">
          <!-- <img src="../src/assets/image/icon_01"> -->
          <img src="@/assets/image/icon_01.png">
          <span class="bg_shape"></span>
        </div>
      </div>
    </div>
    </section>

    <section class="cart_section sec_ptb_120 bg_default_gray">
        <div class="container container_boxed">
            <div class="checkout_form">
              <v-form @submit="addOrder" v-slot="{errors}">
      <div class="row">
        <div class="col-lg-6">
          <div class="form_item">
        <label for="email" class="form-label"><span class="text-danger me-1">*</span>Email</label>
        <v-field id="email" name="email" type="email" class="form-control" rules="email|required" :class="{ 'is-invalid': errors['email'] }"
                 placeholder="請輸入 Email"></v-field>
        <error-message name="email" class="invalid-feedback"></error-message>
      </div>
        </div>
        <div class="col-lg-6">
          <div class="form_item">
        <label for="phone" class="form-label"><span class="text-danger me-1">*</span>電話</label>
        <v-field id="phone" name="tel" type="tel" class="form-control" :rules="isPhone"  :class="{ 'is-invalid': errors['tel'] }"
                 placeholder="請輸入電話"></v-field>
        <error-message name="tel" class="invalid-feedback"></error-message>
      </div>
        </div>
        <div class="col-lg-6">
          <div class="form_item">
        <label for="name" class="form-label"><span class="text-danger me-1">*</span>姓名</label>
        <v-field id="name" name="姓名" type="text" class="form-control" rules="required" :class="{ 'is-invalid': errors['姓名'] }"
                 placeholder="請輸入 您的姓名"></v-field>
        <error-message name="姓名" class="invalid-feedback"></error-message>
      </div>
        </div>
        <div class="col-lg-6">
          <div class="form_item">
        <label for="address" class="form-label"><span class="text-danger me-1">*</span>地址</label>
        <v-field id="address" name="地址" type="text" class="form-control" rules="required" :class="{ 'is-invalid': errors['地址'] }"
                 placeholder="請輸入地址"></v-field>
        <error-message name="地址" class="invalid-feedback"></error-message>
      </div>
        </div>
      </div>
      <div class="form_item">
                        <h4 class="form_field_title">留言</h4>
                        <textarea name="message" placeholder="請輸入留言" v-model="orderData.data.message"></textarea>
      </div>
      <div class="checkout_form_footer">
      <span class="total_price"><strong>總計:</strong> NT. {{ total }}</span>
      
      <button type="submit" class="btn btn_primary">送出訂單</button>
  </div>
  
      <!-- <button class="btn btn-primary" type="submit">Submit</button> -->
    </v-form>
            </div>
        </div>
        </section>
</template>

<script>
import Swal from 'sweetalert2'
import carStore from '../../stores/cart.js'
import innerHeroImg from '@/assets/image/innerHeroImg.jpeg'
import { mapActions, mapState } from 'pinia'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      orderData: {
        data: {
          user: {
            name: '',
            email: '',
            tel: '',
            address: ''
          },
          message: ''
        }
      },
      innerHeroImg:innerHeroImg
    }
  },
  computed: {
    ...mapState(carStore, ['carts', 'total', 'final_total'])
  },
  methods: {
    addOrder () {
      const data = this.orderData
      this.$http.post(`${VITE_APP_URL}/api/${VITE_APP_PATH}/order`, data)
        .then((res) => {

          console.log('加入order:', res.data)
          // this.$refs.form.resetForm();
          Swal.fire({
            title: "成功訂購",
            // text: "That thing is still around?",
            icon: "success"
          });
          this.getCart()
        })
        .catch(err => {
          console.log(err)
        })
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的電話號碼'
    },
    ...mapActions(carStore, ['getCart', 'deleteItem', 'updateCartItem'])
  },
  mounted () {
    this.getCart()
  }
}
</script>
