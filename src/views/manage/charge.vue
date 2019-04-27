<template>
    <div>
         <p class="agency-top-text">商户充值</p>
         <div class="agency-box">
              <Row>
                    <Input   placeholder="系统订单号" style="width: 150px; margin-left:10px;" v-model="account" class="fl"/>
                     <Input   placeholder="商户订单号" style="width: 150px; margin-left:10px;" v-model="account" class="fl"/>
                      <Input   placeholder="商户号" style="width: 150px; margin-left:10px;" v-model="account" class="fl"/>
                       <Input   placeholder="创建时间" style="width: 150px; margin-left:10px;" v-model="account" class="fl"/>
                        <Input   placeholder="系统订单号" style="width: 150px; margin-left:10px;" v-model="account" class="fl"/>
                         <Button type="primary">查询</Button>
               </Row>
               <Table  highlight-row ref="currentRowTable" :columns="columns3" :data="dataList"  style="margin-top:10px;"></Table>  
         </div>
    </div>
</template>
<script>
import {
chargeList
} from "@/api/index";
export default {
    data(){
        return{
          account:'',
          dataList:[],
          columns3:[
                {
                      title: '商户号',
                        key: 'merchant'
                },
               {
                      title: '商户号',
                        key: 'merchant'
                },
                 {
                      title: '充值订单号',
                        key: 'orderno'
                },
                 {
                      title: '充值金额',
                        key: 'rechargeAmount'
                },
                 {
                      title: '充值状态',
                        key: 'merchant'
                },
                 {
                      title: '处理时间',
                        key: 'createTime'
                },
                 {
                      title: '充值备注',
                        key: 'merchant'
                },
                 {
                      title: '操作',
                        key: 'merchant'
                },

          ]
        }
    },
    mounted(){
        this.charge()
    },
    methods:{
        charge(){
            let params={
                pageNumber:"1",
                pageSize:"2"
            }
           chargeList(params).then(res=>{
               console.log(res)
               this.dataList=res.data.list
            }).catch(err=>{
                  this.treeLoading = false;
            })
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
