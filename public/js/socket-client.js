
//Referencias del html

const lblOffline    = document.querySelector('#lblOffline'  );
const lblOnline     = document.querySelector('#lblOnline'   );

const btn_enviar    = document.querySelector('#btn-enviar');
const txtMensaje    = document.querySelector('#txtMensaje');


const socket = io();

socket.on( 'connect', () => {

    lblOffline.style.display    = 'none';
    lblOnline.style.display     = ''    ;
});

socket.on('disconnect', ()=>{

    lblOnline.style.display    = 'none';
    lblOffline.style.display     = ''    ;
});



socket.on('enviar_mensaje', payload => {
    console.log( payload )
})




btn_enviar.addEventListener( 'click', () => {

    const mensaje = txtMensaje.value;


    const payload = {
        mensaje,
        id: '123ABC',
        fecha: new Date().getTime()
    }
    
    

    socket.emit( 'enviar_mensaje', payload, ( id )  =>{
        
        console.log('Desde el Server', id );
    });
});
