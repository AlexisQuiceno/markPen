<template>
<div class="bg-gray-100 flex bg-local" style="background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/architect.svg')">
  <div class="bg-gray-100 mx-auto max-w-6xl bg-white py-20 px-12 lg:px-24 shadow-xl mb-24">
    <form>
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div class="-mx-3 md:flex mb-6">
          <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="company">
              Nombre Completo
            </label>
            <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="company" type="text" placeholder="Nombre">
            <div>
              <span class="text-red-500 text-xs italic">
                Llene este campo Por favor.
              </span>
            </div>
          </div>
          <div class="md:w-1/2 px-3">
            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
              Asunto
            </label>
            <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="title" type="text" placeholder="Como podemos ayudarlo">
          </div>
        </div>
        <div class="-mx-3 md:flex mb-6">
          <div class="md:w-full px-3">
            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="application-link">
              Correo
            </label>
            <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="application-link" type="text" placeholder="E-mail...">
          </div>
        </div>
        <div class="-mx-3 md:flex mb-6">
          <div class="md:w-full px-3">
            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="application-link">
              Mensaje
            </label>
            <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="application-link" type="text" placeholder="Escriba su mensaje">
          </div>
        </div>
        <div class="-mx-3 md:flex mb-2">
          <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="location">
              lugar
            </label>
            <div>
              <select class="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="location">
                <option>Urbano</option>
                <option>Rural</option>
              </select>
            </div>
          </div>
          <div class="md:w-1/2 px-3">
            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="job-type">
              Tipo de usuario
            </label>
            <div>
              <select class="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="job-type">
                <option>Usuario</option>
                <option>Cliente suscrito</option>
                <option>Cliente ocasional</option>
              </select>
            </div>
          </div>

        </div>
        <div class="-mx-3 md:flex mt-2">
          <div class="md:w-full px-3">
            <button class="md:w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>
</template>