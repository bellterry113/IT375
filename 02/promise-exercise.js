const getstudent = (id)=>{
    return new Promise((resolove,reject)=>{
         setTimeout(()=>{
             let name = 'Tanwan' ;
             if(name){
                 resolove({stuid:id,stuname:name});
             }else{
                 reject(new Error('Cannot get the result'));
             }
         },2000);
    });
}
getstudent(15)
.then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log(err.message);
});