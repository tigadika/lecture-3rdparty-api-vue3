<script>
import axios from 'axios'
export default {
  data() {
    return {
      products: [],
      cart: [],
      total: null,
    }
  },
  created() {

  },
  methods: {

  },
  computed: {
    countTotal() {
      return this.cart.reduce((prev, cur) => {
        this.total = (prev + cur.price)
        return this.total
      }, 0)
    }
  }
}
</script>

<template>
  <div class="mx-[100px] flex flex-col">
    <div class="my-12 flex flex-row justify-between">
      <p class="text-3xl">3rd Party API Demo</p>

      <!-- checkout button -->
      <div class="inline-flex relative w-fit">
        <div
          class="absolute inline-block top-0 right-0 bottom-auto left-auto translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 py-1 px-2.5 text-xs leading-none text-center whitespace-nowrap align-baseline font-bold bg-indigo-700 text-white rounded-full z-10">
          $ini total
        </div>
        <button
          class="px-3 py-2 leading-tight bg-white text-gray-500 border rounded-lg border-gray-300 hover:bg-gray-100 hover:text-gray-700">
          Checkout
        </button>
      </div>
      <!-- end of checkout button -->

    </div>
    <div class="grid grid-cols-5 gap-4">

      <!-- card -->
      <div class="border rounded-xl shadow flex flex-col h-[400px] hover:cursor-pointer hover:shadow-xl">
        <img class="object-cover w-full h-[200px] rounded-t-xl"
          src="https://thumb.viva.co.id/media/frontend/thumbs3/2022/07/22/62da7d9d10afc-itzy_1265_711.jpeg" alt="">
        <div class="p-2">
          <div class="flex flex-row justify-between">
            <p class="text-xl self-center">Title</p>
            <p class="bg-emerald-100 rounded-full p-2">Rp. Price</p>
          </div>
          <p class="text-base">Desc</p>
        </div>
      </div>
      <!-- end of card -->

    </div>
  </div>
</template>


<style></style>