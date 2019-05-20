<template>
    <div>
        <p class="agency-top-text">订单管理</p>
        <Row style="margin-top:14px;" type="flex" justify="space-between">
            <Col :span="6" class="balance-box">
                <div class="balance-box-left">
                    <Icon type="logo-yen" class="balance-box-icon" size="36"/>
                </div>
                <div class="balance-box-right">
                    <p>订单金额</p>
                     <div>{{generalAccount.allAmount}}元</div>
                </div>
            </Col>
             <Col :span="6" class="balance-box">
                <div class="balance-box-left">
                    <Icon type="logo-yen" class="balance-box-icon" size="36"/>
                </div>
                <div class="balance-box-right">
                    <p>手续费</p>
                    <div>{{generalAccount.sysAmount}}元</div>
                </div>
            </Col>
             <Col :span="6" class="balance-box">
                <div class="balance-box-left">
                    <Icon type="logo-yen" class="balance-box-icon" size="36"/>
                </div>
                <div class="balance-box-right">
                    <p>交易笔数</p>
                    <div>{{generalAccount.total}}笔</div>
                </div>
            </Col>
             <Col :span="6" class="balance-box">
                <div class="balance-box-left">
                    <Icon type="logo-yen" class="balance-box-icon" size="36"/>
                </div>
                <div class="balance-box-right">
                    <p>用户收入</p>
                    <div>{{generalAccount.allUserMount}}元</div>
                </div>
            </Col>
        </Row>
           <div class="agency-box" style="margin-top:10px;">
               <Row>
                    <Input   placeholder="系统订单号" style="width: 150px; margin-left:10px;" v-model="account" class="fl"/>
                     <Input   placeholder="商户订单号" style="width: 150px; margin-left:10px;" v-model="account" class="fl"/>
                      <Input   placeholder="商户号" style="width: 150px; margin-left:10px;" v-model="account" class="fl"/>
                       <!-- <Input   placeholder="创建时间" style="width: 150px; margin-left:10px;" v-model="account" class="fl"/> -->
                        <Input   placeholder="系统订单号" style="width: 150px; margin-left:10px;" v-model="account" class="fl"/>
                         <Button type="primary">查询</Button>
               </Row>  
                <Table  highlight-row ref="currentRowTable" :columns="columns3" :data="dataList"  style="margin-top:10px;"></Table>  
                  <Row type="flex" justify="end" style="margin-top:10px;">
                    <Page :total="totals"  :page-size="table_limit" show-total :current='table_current' @on-change="ccount"/>
                </Row>
           </div>    
        <div>

        </div>
    </div>
</template>
<script>
import {
 orderList
} from "@/api/index";
export default {
    data(){
        return{
            totals:0,
            table_limit: 10,
           table_current: 1,
            account:'',
            dataList:[],
            generalAccount:{
              sysAmount: "",
            allAmount: "",
            allUserMount: "",
            allOrderRate: "",
            allAgentAmount:"",
            total:''
            },
            columns3:[
                 {
                    title: '商户名',
                    key: 'merchant'
                },
                 {
                    title: '系统订单/商户订单',
                    key: 'orderno'
                },
                 {
                    title: '创建时间',
                    key: 'createTime'
                },
                 {
                    title: '订单金额',
                    key: 'amount'
                },
                 {
                    title: '手续费',
                    key: 'orderrate'
                },
                 {
                    title: '平台收入',
                    key: 'sysamount'
                },
                 {
                    title: '商户收入',
                    key: 'useramount'
                },
                         {
                    title: '状态',
                    key: 'status',
                    render:(h,params)=>{
                           return h('div',[
                               h('strong',{
                                   style: {
                                       marginRight: '5px',
                                         width:'70px'
                                       },
                               }),
                               h('i-switch',{
                                   props: {
                                    type: 'primary',
                                     size:"large",
                                    value: params.row.status===0
                                    },
                                style: {
                                    marginRight: '5px',
                                    width:'70px'
                                    },
                                    on:{
                                         'on-change': (value) => {
                                         }
                                    }
                               },
                               [
                                h('span',{
                                      slot: "open",
                                        domProps: {
                                            innerHTML: '已支付'
                                        }
                                }),
                                 h('span',{
                                      slot: "close",
                                        domProps: {
                                            innerHTML: '未支付'
                                        }
                                }),
                               ]
                               )
                           ])
                       }
                }
                //  {
                //     title: '操作',
                //     key: 'userName'
                // },
            ]
        }
    },
    mounted(){
        this.ccount()
    },
    methods:{
        ccount(page){
            let params={"pageVo":{"pageSize":this.table_limit, "pageNumber":page},
                        "withdrawsVo":{
                           
                    
                        },
                        "searchVo":{
                            "startDate":''
                            }
                        }
            orderList(params).then(res => {
                 console.log(res)
                 this.dataList=res.data.pageInfo.list
                 this.totals=res.data.pageInfo.total
                 this.generalAccount=res.data.generalAccount,
                 this.generalAccount.total=res.data.pageInfo.total
                }).catch(err => {
                    this.treeLoading = false;
                });
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
    .balance-box{
        width: 340px;
        height: 90px;
    }
    .balance-box-left{
        height: 90px;
        width: 90px;
         float: left;
        background: #009ABF;
    }
    .balance-box-icon{
        color: #fff;
        margin-top: 25px;
        margin-left: 25px;
    }
    .balance-box-right{
        height: 90px;
        width: 250px;
        background: #00C0EF;
        float: left;
    }
     .balance-box-right p{
         color: #fff;
         font-size: 14px;
         margin-left: 10px;
         line-height: 40px;
     }
     .balance-box-right div{
         color: #fff;
         font-size: 20px;
         height: 50px;
         border-top: 2px solid #fff;
         line-height: 50px;
         padding-left: 10px;
     }
</style>
