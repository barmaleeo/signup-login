

let ajaxFailCallback = () => {};

window.$ = {
    post: (uri, data, callback, result) => {
        console.log('ajax uri:', uri, data)
        setTimeout(() => {
            switch (uri){
                case '/en/signup':
                    if((data.phone ==='79999999999') || (data.email === 'test@test.te')){
                        callback({status: 'ok', msg: 'Мы отправили Вам ссылку'})
                    }else{
                        callback({status: 'error', msg: 'Уже существует.'})
                    }

                    break;
                case '/en/resend-verification-email':
                    callback({status: 'ok', msg:{confirmation: 'Ссылка отправлена'}})
                    break;
                case '/en/confirm-code':
                    if(data.code ==='888888'){
                        callback({status: 'ok', redirect: '/'})
                    }else{
                        callback({status: 'error', msg: 'Неправильный код.'})
                    }
                    break;
                case '/en/resend-code':
                    callback({status: 'ok', code: '888888'})
                    break;
                default:
                    ajaxFailCallback({status: 404 })
            }
        }, 500)

        return {
            fail: (callback) => {
                ajaxFailCallback = callback
            }
        }
    },
}
