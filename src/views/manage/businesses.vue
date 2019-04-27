<template>
    <div>
          <p class="agency-top-text">普通商户</p>
          <div class="agency-box">
                <Button type="primary">添加商户</Button>
                 <Table  highlight-row ref="currentRowTable" :columns="columns3" :data="dataList" style="margin-top:20px;"></Table>
          </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            dataList:[],
          columns3:[
             {
                    type: 'index',
                    width: 60,
                    align: 'center'
                },
                {
                      title: '商户号',
                        key: 'merchant'
                },
                 {
                      title: '用户名',
                        key: 'merchant'
                },
                 {
                      title: '余额',
                        key: 'merchant'
                },
                 {
                      title: '上级代理',
                        key: 'merchant'
                },
                 {
                      title: 'Email',
                        key: 'merchant'
                },
                 {
                      title: '电话',
                        key: 'merchant'
                },
                 {
                      title: '状态',
                        key: 'merchant'
                },
                 {
                      title: '操作',
                        key: 'merchant'
                }

          ]  
        }
    }
}
</script>
<style lang="less" scoped>
    .agency-top-text{
        font-size: 24px;
        font-weight: 700;
        color: #333;
        margin-top: 30px 0 20px 30px;
    }
    .agency-box{
        width: 100%;
        height: 100%;
        padding: 15px;
        margin-top: 40px 0 20px 30px;
        background: #fff;
    }
    .fl{
        margin-right: 10px;
    }
</style>
