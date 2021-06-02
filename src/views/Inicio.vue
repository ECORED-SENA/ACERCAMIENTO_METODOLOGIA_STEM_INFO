<template lang="pug">
section
  .banner-principal.mb-5
    .container.tarjeta.p-4.p-sm-5
      .row.justify-content-around.align-items-center
        .col-lg-7.col-xxl-6.banner-principal__info
          .banner-principal__programa
            .h1.mb-0 Acercamiento a la metodología STEM: ideas para implementarla
          
          .h2 Información del programa
          .banner-principal__datos
            ul
              li.mb-1.banner-principal__datos__item
                p.h6.mb-0.me-3.banner-principal__datos__item__titulo Nombre del programa: 
                p.banner-principal__datos__item__texto Acercamiento a la metodología STEM: ideas para implementarla
              li.mb-1.banner-principal__datos__item
                p.h6.mb-0.me-3.banner-principal__datos__item__titulo Código: 
                p.banner-principal__datos__item__texto 41220017
              li.mb-1.banner-principal__datos__item
                p.h6.mb-0.me-3.banner-principal__datos__item__titulo Total Horas: 
                p.banner-principal__datos__item__texto 48 Horas
              li.mb-1.banner-principal__datos__item
                p.h6.mb-0.me-3.banner-principal__datos__item__titulo Duración en semanas: 
                p.banner-principal__datos__item__texto 4 Semanas
              li.mb-1.banner-principal__datos__item
                p.h6.mb-0.me-3.banner-principal__datos__item__titulo Modalidad: 
                p.banner-principal__datos__item__texto virtual
              

        .d-none.d-lg-block.col-lg-5
          //- img(src="@/assets/curso/banner-princiapal.svg")
          .video
            | <iframe data-v-1f9e4816="" width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

  .container.tarjeta.tarjeta__template--azul-claro.p-4.p-md-5.mb-5
    .titulo__template--a.mb-4
      span.h4 1. Presentación

    p En Colombia, los ataques mediante agentes químicos son un delito y una de las formas en las que se manifiesta en el país las violencias de género. A pesar de los esfuerzos estatales, esta violencia sigue presentándose y con frecuencia, las víctimas son atendidas de forma inadecuada en las diferentes instituciones responsables del restablecimiento de sus derechos (sectores salud, justicia y protección)
      br
      br
      | Por tal motivo, el presente curso hace parte de las acciones que el Ministerio de Salud y Protección Social está realizando para garantizar que todas las víctimas de las diferentes manifestaciones de las violencias de género reciban una atención integral, oportuna y de calidad que permita su recuperación. Su principal objetivo es brindar a los equipos de salud información clara sobre las particularidades de las agresiones por agentes químicos, así como las acciones que deben implementarse en diferentes momentos para reducir el daño y tratar las afectaciones a la salud.

  .container.tarjeta.tarjeta__template--azul-claro.p-4.p-md-5.mb-5
    .titulo__template--a.mb-4
      span.h4 2. Justificación<br>del programa

    p Con el propósito de garantizar que las víctimas de agresiones por agentes químicos reciban en cualquier institución de salud una atención oportuna, pertinente y con racionalidad científica, de manera que se logre reducir el daño físico y mental, así como, que se desarrollen las acciones que les garantice el acceso a la justicia, a la protección y al restablecimiento de los derechos afectados, se dispone del Protocolo de Atención Integral en Urgencias a Víctimas de Ataque con Agentes Químicos, el cual debe ser observado y aplicado por los prestadores de servicios de salud y demás agentes que tengan contacto primario con las víctimas. El Gobierno Nacional se encargará de garantizar la capacitación del personal estatal que pueda tener contacto primario con una víctima de ataque con sustancias o agentes químicos corrosivos, a fin de darle la atención correspondiente.

  .container.tarjeta.tarjeta__template--azul-claro.p-4.p-md-5.mb-5
    .titulo__template--a.mb-4
      span.h4 3. Población<br>objetivo

    p El curso está dirigido a profesionales, tecnólogos y técnicos en salud que requieren conocer elementos conceptuales y normativos para implementar procesos y procedimientos operativos básicos que garanticen una atención en salud integral, oportuna y de calidad a las víctimas de ataque con agentes químicos.

  .container.tarjeta.tarjeta__template--azul-claro.p-4.p-md-5.mb-5
    .titulo__template--a.mb-4
      span.h4 3. Estrategia<br>metodológica

    p Centrada en la construcción de la autonomía para garantizar la calidad de la formación en el marco de la formación por competencias, el aprendizaje por proyectos y el uso de técnicas didácticas activas que estimulan el pensamiento para la resolución de problemas simulados y reales; soportadas en la utilización de las tecnologías de la información y la comunicación, integradas en ambientes virtuales de aprendizaje, que en todo caso recrean el contexto productivo y vinculan al aprendiz con la realidad cotidiana y el desarrollo de las competencias.
      br
      br
      | Las estrategias didácticas integradoras están basadas en situaciones reales que le permitirán poner en marcha los contenidos conceptuales y procedimentales, aplicando sus conocimientos y habilidades para resolver un problema, frente a la atención integral de urgencias a víctimas de ataque con agentes químicos.
      br
      br
      | Igualmente, debe estimular de manera permanente la autocrítica y la reflexión del aprendiz sobre el quehacer y los resultados de aprendizaje que logra a través de la vinculación activa de las cuatro fuentes de información para la construcción de conocimiento:

  //- Créditos
  .container.tarjeta.tarjeta__template--azul-claro.p-4.p-md-5.mb-5
    .titulo__template--a.mb-4
      span.h4 Créditos

    Creditos

  Footer

</template>
<script>
export default {
  name: 'Inicio',
  data: () => ({}),
}
</script>

<style lang="sass"></style>
