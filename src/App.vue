<template>
  <table class="table">
    <tr>
      <th @click="sortBy('id')">序号</th>
      <th @click="sortBy('name')">书名</th>
      <th @click="sortBy('author')">作者</th>
      <th @click="sortBy('price')">价格</th>
      <th>操作</th>
    </tr>
    <tr v-for="book in books | orderBy sortparam">
      <td>{{book.id}}</td>
      <td>{{book.name | uppercase}}</td>
      <td>{{book.author}}</td>
      <td>{{book.price}}</td>
      <td><button type="button" class="btn btn-danger" @click="delBook(book)">删除</button></td>
    </tr>
    <tr>
      <td colspan="5" class="text-right">合计：{{sum}}</td>
    </tr>
  </table>

  <div id="add-book">
     <legend>添加书籍</legend>
     <div class="form-group">
           <label for="">书名</label>
           <input type="text" class="form-control" v-model="book.name">
     </div>
     <div class="form-group">
            <label for="">作者</label>
            <input type="text" class="form-control" v-model="book.author">
     </div>
     <div class="form-group">
              <label for="">价格</label>
              <input type="text" class="form-control" v-model="book.price">
      </div>
      <button class="btn btn-primary btn-block" v-on:click="addBook()">添加</button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      sortparam: '',
      book: {
        id: 0,
        author: '',
        name: '',
        price: ''
      },
      books: [{
        id: 1,
        author: '曹雪芹',
        name: '红楼梦',
        price: 32.0
      }, {
        id: 2,
        author: '施耐庵',
        name: '水浒传',
        price: 30.0
      }, {
        id: '3',
        author: '罗贯中',
        name: '三国演义',
        price: 24.0
      }, {
        id: 4,
        author: '吴承恩',
        name: '西游记',
        price: 20.0
      }]
    }
  },
  methods: {
    addBook: function () {
      this.book.id = this.books.length + 1
      this.books.push(this.book)
      this.book = ''
    },
    delBook: function (book) {
      this.books.$remove(book)
    },
    sortBy: function (sortparam) {
      this.sortparam = sortparam
    }
  },
  computed: {
    sum: function () {
      var result = 0
      for (var i = 0; i < this.books.length; i++) {
        result = Number(this.books[i].price) + result
      }
      return result
    }
  }
}
</script>
