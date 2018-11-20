<?php

/**
* Plugin Name: calculadora-plugin
* Description: plugin de calculadora
* Version: 1.0
* Author: Laiz e Stewart
*/

//principal função usada no plugin
function Calculo( $atts ){
    return '<center><iframe src="'.plugins_url().'/plugin_calculadora/index.php" frameborder="0" width="300px" height="600px"></iframe></center>';
}
add_shortcode('calculadora', 'Calculo');
?>