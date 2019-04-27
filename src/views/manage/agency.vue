<template>
    <div>
        <p class="agency-top-text">代理商户</p>
        <div class="agency-box">
            <Button type="primary" @click="modal1 = true">添加代理</Button>
                <Modal
                    v-model="modal1"
                    title="添加代理"
                    @on-ok="ok"
                    @on-cancel="cancel">
                    <Form  :label-width="80" :model='formdata' :rules='ruleValidate'>
                        <FormItem label="用户名" prop='username'>
                            <Input v-model="formdata.username" placeholder="请输入用户名"/>
                        </FormItem>
                         <FormItem label="密码" prop='password'>
                            <Input v-model="formdata.password" type="password" placeholder="请输入密码"/>
                        </FormItem>
                         <FormItem label="邮箱" prop='email'>
                            <Input v-model="formdata.email" placeholder="请输入邮箱"/>
                        </FormItem>
                         <FormItem label="电话" prop='mobile'>
                            <Input v-model="formdata.mobile" placeholder="请输入电话"/>
                        </FormItem>
                         <FormItem label="状态">
                             <Select v-model="formdata.status">
                                <Option v-for="item in statusList" :key='item.id' :value="item.id">{{item.name}}</Option>
                            </Select>
                        </FormItem>
                    </Form>    
                </Modal>
            <Row style="margin-top:10px;">    
                <Input v-model="agencyName" placeholder="商户号" style="width: 150px" class="fl"/>
                <!-- <Select  placeholder="用户号" class="fl" style="width:150px">
                    <Option> </Option>
                </Select>
                 <Select  placeholder="状态" class="fl" style="width:80px">
                    <Option> </Option>
                </Select> -->
                 <Button type="primary">查询</Button>
            </Row>
            <Table  highlight-row ref="currentRowTable" :columns="columns3" :data="dataList"  @on-current-change="handleRowChange" style="margin-top:10px;"></Table>
            <Modal
             v-model="modal2"
                    title="充值"
                    @on-ok="twook"
                    @on-cancel="twocancel"
            >
            <Row style="margin-top:10px;">    
                 <Form  :label-width="80" :model='chargedata'>
                    <FormItem label="金额" >
                            <Input v-model="chargedata.amount" placeholder="金额"/>
                    </FormItem>
                    <FormItem label="修改状态">
                             <Select v-model="chargedata.status">
                                <Option value="0">增加</Option>
                                <Option value="1">减少</Option>
                            </Select>
                    </FormItem>
                 </Form>    
            </Row>
            </Modal>
        </div>
    </div>
</template>
<script>
import {
 agencyadd,
 merchantList,
 subtract
} from "@/api/index";
export default {
    data(){
        return{
            text:'启用',
            qi:'',
            modal1:false,
            modal2:false,
            amountss:'',
            agencyName:'',
            formdata:{
                username:'', //用户名
                password:'', //密码
                status:'',   //状态
                email:'', //邮箱
                mobile:'' //手机号
            },
            chargedata:{
                amount:'',
                status:'',
                userid:'',
                type:''
            },
            dataList:[
                
            ],
            statusList:[
                {
                    id:'0',
                    name:'启用'
                },
                 {
                    id:'1',
                    name:'禁用'
                },
                 {
                    id:'2',
                    name:'删除'
                }
            ],
            ruleValidate:{
                username: [
                    { required: true, message: '用户名不能为空', trigger: 'blur' }
                ],
                 password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' }
                ],
                mobile:[
                     { required: true, message: '手机号不能为空', trigger: 'blur' }
                ],
                email:[
                   { required: true, message: '邮箱不能为空', trigger: 'blur' } 
                ]
            },
             columns3: [
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
                        key: 'username'
                    },
                    {
                        title: '余额',
                        key: 'amount'
                    },
                     {
                        title: '充值余额',
                        key: 'address'
                    },
                      {
                        title: '邮箱',
                        key: 'email'
                    },
                      {
                        title: '电话',
                        key: 'mobile'
                    },
                      {
                        title: '状态',
                         key: 'status',
                       render:(h,params)=>{
                           return h('div',[
                               h('strong',{
                                   style: {
                                       marginRight: '5px'
                                       },
                               }),
                               h('i-switch',{
                                   props: {
                                    type: 'primary',
                                    value: params.row.status===0
                                    },
                                style: {
                                    marginRight: '5px'
                                    },
                                    on:{
                                         'on-change': (value) => {
                                            
                                         }
                                    }
                               })
                           ])
                       }
                    },
                    {     width: 380,
                         title: '操作', 
                         render:(h, params)=>{
                             return h('div',[
                                 h('Button',{
                                      props: {
                                         size: 'small',
                                         type: 'success'
                                        },
                                         style: {
                                            marginRight: '10px'
                                            },
                                        on:{
                                             click: () =>{
                                                //  this.handleRowChange(currentRow, oldCurrentRow)
                                                this.$router.push('/manage/passageway')
                                             }
                                        }
                                 },'通道设置'),
                                  h('Button',{
                                      props: {
                                         size: 'small',
                                         type: 'info'
                                        },
                                         style: {
                                            marginRight: '10px'
                                            },
                                        on:{
                                             click: () =>{
                                                console.log(744444)
                                             }
                                        }
                                 },'编辑'),
                                  h('Button',{
                                      props: {
                                         size: 'small',
                                         type: 'error'
                                        },
                                         style: {
                                            marginRight: '10px'
                                            },
                                        on:{
                                             click: () =>{
                                                console.log(744444)
                                             }
                                        }
                                 },'删除'),
                                  h('Button',{
                                      props: {
                                         size: 'small',
                                         type: 'warning'
                                        },
                                         style: {
                                            marginRight: '10px'
                                            },
                                        on:{
                                             click: () =>{
                                               this.modal2=true
                                             }
                                        }
                                 },'充值余额'),
                                  h('Button',{
                                      props: {
                                         size: 'small',
                                         type: 'info'
                                        },
                                         style: {
                                            marginRight: '10px'
                                            },
                                        on:{
                                             click: () =>{
                                                this.modal2=true
                                             }
                                        }
                                 },'余额加减')
                             ])
                         }
                    }
                ],
        }
    },
    mounted(){
        this.cc()
    },
     methods: {
            //确认
            ok () {
                let params=this.formdata
                agencyadd(params).then(res => {
                  if(res.status===0){
                    this.$Message.info('新增成功');
                  }
                }).catch(err => {
                    this.treeLoading = false;
                });
                this.formdata=''
            },
            //取消
            cancel () {
            },
            twook(){this.addsubtract()},
            twocancel(){},
            cc(){
                 let params={"pageVo":{"pageNumber":1,"pageSize":10},"userVo":{"username":"test","roleIds":"666666666666666"},"searchVo":{"startDate":"","endDate":""}}
               merchantList(params).then(res => {
                   console.log(res)
                   this.dataList=res.data.list
                   this.qi=res.data.list.status
                }).catch(err => {
                    this.treeLoading = false;
                });
            },
             handleRowChange(currentRow, oldCurrentRow){
                this.chargedata.userid=currentRow.id
                this.chargedata.type=currentRow.type
                localStorage.setItem('uid', currentRow.id)
                localStorage.setItem('parentId', currentRow.parentId)
            },
            addsubtract(){
                let params={"walletVo":{"userId":this.chargedata.userid,"type":this.chargedata.type},"option":this.chargedata.status,"amount":this.chargedata.amount}
            subtract(params).then(res=>{
                if(res.status==0){
                    this.$Message.success('增加成功');
                }
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
