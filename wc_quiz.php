<?php

/**
 * Plugin Name:       WordPress Quiz
 * Plugin URI:        https://github.com/riccardodicurti/wc_quiz
 * Description:
 * Version:           16032022
 * Author:            Riccardo Di Curti
 * Author URI:        https://riccardodicurti.it/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wc_quiz
 * Domain Path:       /languages
 */

if (! function_exists('is_plugin_active') ) {
    include_once(ABSPATH . 'wp-admin/includes/plugin.php');
}

if ( is_plugin_active( 'woocommerce/woocommerce.php' ) ) {

    // if ( is_admin() ) {
        // require __DIR__ . '/includes/settings.php';
    // }

    add_shortcode( 'wc_quiz', 'wc_quiz_shortcode' );
    add_action( 'wp_enqueue_scripts', 'wc_quiz_scripts' );

} else {
    add_action( 'admin_notices', 'wc_quiz_admin_error_notice' );
}

function wc_quiz_shortcode( $atts ) {
    ?>

    <div id="quiz" x-data="quiz">
        <h4>scopri a quale corso ti puoi iscrivere</h4>
        <h5>tempo necessario ≈ 2 min.</h5>

        <h1 x-text="currentStep['domanda']"></h1>

        <div class="risposte">
            <template x-for="item in currentStep['risposte']" :key="item">
                <span class="">
                    <template x-if="!currentStep['final']">
                        <a class="quiz__button" x-on:click="step = item[1]" x-text="item[0]"></a>
                    </template>

                    <template x-if="currentStep['final']">
                        <a class="quiz__button" :href="item[1]" x-text="item[0]"></a>
                    </template>
                </span>
            </template>
        </div>

        <div class="debug">
            <pre>domanda attuale: <span x-text="step"></span></pre>
            <pre>è una domanda finale: <span x-text="currentStep['final']"></span></pre>
        </div>

    </div>

    <?php
}

function wc_quiz_scripts() {
    global $post;

    if( has_shortcode( $post->post_content, 'wc_quiz') ) {
        wp_enqueue_style( 'wc_quiz_style', plugin_dir_url( __FILE__ ) . 'assets/css/style.css' );

        wp_enqueue_script( 'wc_quiz_alpine_js',  '//unpkg.com/alpinejs', array(), null, false );
        wp_enqueue_script( 'wc_quiz_js_init', plugin_dir_url( __FILE__ ) . 'assets/js/init.js', array('wc_quiz_alpine_js'), null, false );
    }
}

function wc_quiz_admin_error_notice() {
    echo '<div class="notice error my-acf-notice is-dismissible" ><p>' .  __( 'Il plugin WordPress Quiz per funzionare ha bisogno di WooCommerce attivo.', 'wc_quiz' ) . '</p></div>';
}