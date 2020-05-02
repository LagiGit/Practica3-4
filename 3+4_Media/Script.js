function Movie_OnStart(){
StackTrace="Al Iniciar";
VideoSetVolume("video",0);
SoundPlay("Musica", true);



}

function Frame__0_0(ID){
StackTrace="Escena 1 Fotograma 0";
Pause();

}

function Frame__1_0(ID){
StackTrace="Escena 2 Fotograma 0";
Pause();

}

function BotonPausaVideo_OnClick(){
StackTrace="BotonPausaVideo.Al Hacer Clic";
SoundPlay("SonidoBoton",false);
VideoPause("video");

}

function BotonPausaVideo_OnRelease(){
StackTrace="BotonPausaVideo.Al Liberar";
SoundPlay("SonidoBoton",false);
VideoResume("video");

}

function BotonMusica_OnClick(){
StackTrace="BotonMusica.Al Hacer Clic";
SoundPlay("SonidoBoton",false);
GotoSceneName("EscenaAudio");

}

function BotonSonidoVideo_OnClick(){
StackTrace="BotonSonidoVideo.Al Hacer Clic";
SoundPlay("SonidoBoton",false);
VideoSetVolume("video",100);

}

function BotonSonidoVideo_OnRelease(){
StackTrace="BotonSonidoVideo.Al Liberar";
SoundPlay("SonidoBoton",false);
VideoSetVolume("video",0);

}

function BotonVideo_OnClick(){
StackTrace="BotonVideo.Al Hacer Clic";
SoundPlay("SonidoBoton",false);
GotoSceneName("EscenaVideo");

}

function BotonPausaMusica_OnClick(){
StackTrace="BotonPausaMusica.Al Hacer Clic";
SoundPlay("SonidoBoton",false);
SoundPause("Musica");

}

function BotonPausaMusica_OnRelease(){
StackTrace="BotonPausaMusica.Al Liberar";
SoundPlay("SonidoBoton",false);
SoundResume("Musica");

}

