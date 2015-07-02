// JavaScript Document
function init()
{


}
function tipoServicio(tipo)
{
	if(tipo==1)
	{
		$("#div_domicilio").fadeOut( "slow");
		$("#div_reservacion").fadeIn( "slow");
	}else{
		$("#div_reservacion").fadeOut( "slow");
		$("#div_domicilio").fadeIn( "slow");
	}
}