<template>
    <div>
        <p class="agency-top-text">结算管理</p>
        <Row style="margin-top:14px;" type="flex" justify="space-between">
            <Col :span="6" class="balance-box">
                <div class="balance-box-left">
                    <Icon type="logo-yen" class="balance-box-icon" size="36"/>
                </div>
                <div class="balance-box-right">
                    <p>结算总额</p>
                    <div>3355441.81元</div>
                </div>
            </Col>
             <Col :span="6" class="balance-box">
                <div class="balance-box-left">
                    <Icon type="logo-yen" class="balance-box-icon" size="36"/>
                </div>
                <div class="balance-box-right">
                    <p>结算总额</p>
                    <div>3355441.81元</div>
                </div>
            </Col>
             <Col :span="6" class="balance-box">
                <div class="balance-box-left">
                    <Icon type="logo-yen" class="balance-box-icon" size="36"/>
                </div>
                <div class="balance-box-right">
                    <p>结算总额</p>
                    <div>3355441.81元</div>
                </div>
            </Col>
             <Col :span="6" class="balance-box">
                <div class="balance-box-left">
                    <Icon type="logo-yen" class="balance-box-icon" size="36"/>
                </div>
                <div class="balance-box-right">
                    <p>结算总额</p>
                    <div>3355441.81元</div>
                </div>
            </Col>
        </Row>
           <div class="agency-box" style="margin-top:10px;">
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
        <div>

        </div>
    </div>
</template>
<script>
import {
 ccountList
} from "@/api/index";
export default {
    data(){
        return{
            account:'',
            dataList:[],
            columns3:[
                 {
                    title: '商户名',
                    key: 'userName'
                },
                 {
                    title: '系统订单号',
                    key: 'userName'
                },
                 {
                    title: '结算金额',
                    key: 'userName'
                },
                 {
                    title: '手续费',
                    key: 'userName'
                },
                 {
                    title: '实际结算',
                    key: 'userName'
                },
                 {
                    title: '结算银行',
                    key: 'userName'
                },
                 {
                    title: '开户名',
                    key: 'userName'
                },
                 {
                    title: '银行账户',
                    key: 'userName'
                },
                 {
                    title: '申请时间',
                    key: 'userName'
                },
                 {
                    title: '处理时间',
                    key: 'userName'
                },
                 {
                    title: '结算备注',
                    key: 'userName'
                },
                 {
                    title: '结算状态',
                    key: 'userName'
                },
            ]
        }
    },
    mounted(){
        this.ccount()
    },
    methods:{
        ccount(){
            let params={"pageVo":{"pageSize":10,"pageNumber":"1"},
                        "withdrawsVo":{
                           
                    
                        },
                        "searchVo":{
                            "startDate":''
                            }
                        }
            ccountList(params).then(res => {
                 console.log(res)
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
