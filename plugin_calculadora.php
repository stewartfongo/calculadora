<?php

/**
* Plugin Name: plugin_calculadora
* Description: plugin de exemplo
* Version: 1.0
* Author: Paulo Aquino
*/

//principal função usada no plugin
function Calculo( $atts ){
    return '<center><iframe src="'.plugins_url().'/plugin_calculadora/index.php" frameborder="0" width="300px" height="600px"></iframe></center>';
}
add_shortcode('calculadora', 'Calculo');
?>