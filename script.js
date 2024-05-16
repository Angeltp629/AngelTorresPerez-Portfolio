document.addEventListener('DOMContentLoaded', function () {
  const spans = document.querySelectorAll('.verDetalles');
  spans.forEach(function (span) {
    span.addEventListener('click', function () {
      var details = span.nextElementSibling;
      details.classList.toggle('expandido');
      if (details.classList.contains('expandido')) {
        span.textContent = "Ocultar detalles";
        details.style.visibility = "visible";
      } else {
        span.textContent = "Ver detalles >";
        details.style.visibility = "hidden";
      }
    });
  });
  const formacionRadio = document.getElementById('toggle-on');
  const experienciaRadio = document.getElementById('toggle-off');
  const timelineFormacion = document.getElementById('timeline-formacion');
  const timelineExperiencia = document.getElementById('timeline-experiencia');
  let header = document.getElementById('timeline-titulo');

  formacionRadio.addEventListener('change', function () {
    timelineFormacion.style.display = 'grid';
    timelineExperiencia.style.display = 'none';
    header.textContent = 'Formación';
  });

  experienciaRadio.addEventListener('change', function () {
    timelineFormacion.style.display = 'none';
    timelineExperiencia.style.display = 'grid';
    header.textContent = 'Experiencia';
  });

  const navbar = document.getElementById('header');
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});
