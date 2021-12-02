const msg= { 
    baqRequest :{
        code : 400,
        error: true,
        msg: 'Data error'
    },

    fielsdRequired: {
        code: 400,
        error: true,
        msg: 'Please enter all fields'
    },
    authFailed:{
        code: 401,
        error: true,    
        msg : 'Auth Failed'
}
}
module.exports = msg