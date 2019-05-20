<template>
    <div>
        <Row>
            <Col span="6">
                <Card>
                    <p slot="title">结算申请</p>
                    <div class="Card-cpde">
                         提现金额:<Input v-model="actualAmount" style="width: 300px"/>
                    </div>
                    <div class="Card-cpde">
                            银行卡 <Button type="primary" @click="modal1 = true" style="margin-left:10px;">选择银行卡</Button>
                                  <Button type="primary" @click="modal2 = true" style="margin-left:10px;">添加银行卡</Button>  
                    </div>
                      <div class="Card-cpde">
                         持卡姓名:<Input v-model="actualAmount" style="width: 300px"/>
                    </div>
                      <div class="Card-cpde">
                         支行名称:<Input v-model="actualAmount" style="width: 300px"/>
                    </div>
                      <div class="Card-cpde">
                         银行卡号:<Input v-model="actualAmount" style="width: 300px"/>
                    </div>
                     <div class="Card-cpde">
                        <Button type="primary" @click='recharges'>立即支付</Button>
                     </div>
                </Card>
            </Col>
            <Modal
                    v-model="modal1"
                    title="添加银行卡"
                    @on-ok="ok1"
                    @on-cancel="cancel1"
            >
            <p>444</p>
            </Modal>    
             <Modal
                    v-model="modal2"
                    title="添加银行卡"
                    @on-ok="ok2"
                    @on-cancel="cancel2">
                          <Form  :label-width="80" v-model='fromData'>
                        <FormItem label="银行名称">
                             <Select v-model="fromData.bankId">
                                <Option v-for="item in bankList" :key='item.id' :value="item.id">{{item.bankname}}</Option>
                        </Select>
                        </FormItem>
                        <FormItem label="持卡人姓名" >
                            <Input v-model="fromData.accountName" placeholder="请输入用户名"/>
                        </FormItem>
                         <FormItem label="支行名称">
                            <Input v-model="fromData.branchName"  placeholder="请输入支行名称"/>
                        </FormItem>
                         <FormItem label="银行卡号" >
                            <Input v-model="fromData.bankCardNo" placeholder="请输入银行卡号"/>
                        </FormItem>
                    </Form>
             </Modal>        
            <Col span="16" style="margin-left:60px;">
                <Card>
                    <p slot="title">充值记录</p> 
                    <Input v-model="orderNo" placeholder="订单号" style="width: 200px"/>
                    <Button type="primary" style="margin-left:10px;">查询</Button>
                     <Table  highlight-row ref="currentRowTable" :columns="columns3" :data="dataList"  style="margin-top:10px;"></Table>
                </Card>     
            </Col>
        </Row>    
    </div>
</template>
<script>
import {
bankcard,
usersLiat,
bankcardadd
} from "@/api/index";
export default {
    data(){
        return{
            modal1:false,
            modal2:false,
         orderNo:'',
         userid:'',
         username:'',
         bankList:[],
         actualAmount:'',
         fromData:{
             userId:'',
             bankId:'',
             bankCardNo:'',
             accountName:'',
             branchName:''
         },
         dataList:[],
         columns3:[
             {
                title: '订单号',
                key: 'orderno'
            }, 
             {
                title: '实付金额',
                key: 'actualAmount'
            },
             {
                title: '支付时间',
                key: 'createTime'
            },
             {
                    title: '结算状态',
                    key: 'payStatus',
                       render:(h,params)=>{
                           let payStatus = params.row.payStatus
                           if(payStatus=='0'){
                                payStatus='未支付'
                           }else if(payStatus=='1'){
                                payStatus='已支付'
                           }else if(payStatus=='3'){
                                payStatus='异常'
                           }
                           return h('span',payStatus)
                       }
                }
         ]   
        }
    },
    mounted(){
       this.bankcardlist()
       this.user()
       
         this.fromData.userId=this.userid
    }, 
    methods:{
      recharges(){},
      ok1(){},
      cancel1(){},
      ok2(){
          console.log(this.fromData)
          let params=this.fromData
          bankcardadd(params).then(res=>{
              console.log(res)
          }).catch(res=>{

          })
      },
      cancel2(){},
      bankcardlist(){
             bankcard().then(res => {
                 this.bankList=res.data
                 console.log(this.bankList)
                }).catch(err => {
                    this.treeLoading = false;
                });
      },
      user(){
          usersLiat().then(res=>{
              this.fromData.userId=res.data.id
              this.userid=res.data.id
 }).catch(err=>{
               this.treeLoading = false;
          })
      }
    }
}
</script>

<style lang="less" scoped>
.Card-cpde{
    margin-top: 20px;
}
</style>
