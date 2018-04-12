<template>
  <div class="box">
    <div class="modal">
      <p>上报公司</p>
      <el-select size="small" class="select" v-model="value" placeholder="请选择上报公司">
        <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select><br>
    <el-button class="btn" type="primary" plain>确定</el-button>

  </div>
</div>
<div class="upload">
  <form id="upload" enctype="multipart/form-data" method="post">
    <el-upload
    ref="upload"
    action=""
    :on-change="handleChange"
    :before-upload="beforeAvatarUpload">
    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
    <!-- <el-button style="margin-left: 10px;" size="small" type="success" @click="upload">上传到服务器</el-button> -->
    <div slot="tip" class="el-upload__tip">只能上传 JSON 文件</div>
  </el-upload>
</form>
</div>
</template>

<script>
import * as adminsAPI from '@/api/admins'
export default {

      data () {
        return {
          options: [{
            value: '1',
            label: '公司1'
          }, {
            value: '2',
            label: '公司2'
          }, {
            value: '3',
            label: '公司3'
          }, {
            value: '4',
            label: '公司4'
          }, {
            value: '5',
            label: '公司5'
          }],
          value: 'companyId'
        }
      },
      methods: {
        download () {
          handleChange (file) {
            // this.$refs.upload.submit()
            adminsAPI.postUploadFile(Qs.stringify(file))
          },
          beforeAvatarUpload (file) {
            let type = file.name.split('.')
            if (type[1] === 'json') {
              return file
            } else {
              this.$message.error('上传文件只能是 JSON 格式!')
              return false
            }
          },
    }
  }
    </script>

    <style scoped>
    .box{
      width: 100%;
      height: 100%;
      background-color:rgba(0,0,0,.1);
      text-align: center;
      position: relative;
    }
    .modal{
      width: 400px;
      height: 180px;
      background-color:#fff;
      position: absolute;
      left:50%;
      margin-left:-175px;
      margin-top:200px;
    }
    p{
      font-family:"Microsoft YaHei";
      font-size:16px;
      font-weight:bold;
    }
    .select{
      width: 90%;
      margin-top:22px;

    }
    .btn{
      width: 100%;
      border:0;
      position: absolute;
      bottom:0;
      left:0;
    }
    </style>
