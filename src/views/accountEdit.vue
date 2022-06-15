<template>
<div class="container">
    <div class="row border col-md-6 mx-auto">
        <form method="post" action="/account/edit" id="account_edit_form" class="account_table">
            <input type="hidden" name="authenticity_token" id="authenticity_token" value="e7yKWwsd9K+xVJMJMCeR/4BDIfJ+HCgDnUcVnHg8xNITaAY16FwTDomaPjsw2GW5EV0B2WZHkBRj/MTSTJC0aQ==" >
            <div class="form-group">
            <label for="customerName">姓名:</label>
            <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="王小明" disabled>
            </div>
            <div class="form-group">
                
                <label for="customerEmail">電子郵件:</label>
                <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com" disabled>
            </div>
            <div class="form_btns form-row ">
                <div class="row ">
                    <div class="form_btn ">
                    <a href="javascript:void(0)" class="btn reset_form col-5">重新填寫</a>&emsp;
                    <button type="submit" class="btn active col-5 ">確定修改</button>
                    
                    </div>
                </div>
            </div>
            
        </form>
        
    </div>
</div>
</template>

<style>
.reset_form {
    background-color: #fff;
    border: 1px solid #9a9ea2;
    border-radius: 5px;
    color: #9a9ea2;
    transition: all ease-in-out .15s;
    text-align: center;
    
}
.btn.active {
    border: 1px solid #ff674f;
    background-color: #ff674f;
    border-radius: 5px;
    color: #fff;
    transition: all ease-in-out .15s;
    text-align: center;
}

</style>