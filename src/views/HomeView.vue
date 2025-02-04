<script setup></script>

<template>
  <div class="mx-auto max-w-2xl space-y-4 px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
    <header>
      <img src="/2fafd2ca0fa23ca91ec778674c26081a.svg" alt="Santos Vilanculos" loading="eager" />
    </header>

    <main class="space-y-8">
      <section>
        <p class="mt-6 text-base/6 text-zinc-700">
          Crafting interfaces. Building polished software and web experiences. Experimenting with magical details in
          user interfaces.
        </p>
      </section>

      <section>
        <h2 class="text-base/6 font-medium">skills</h2>

        <ul class="mt-2 text-base/6 text-zinc-700">
          <li>― bash</li>
          <li>― css 3 (Bootstrap · Tailwind CSS)</li>
          <li>― javascript (Vue 3)</li>
          <li>― html 5</li>
          <li>― php (Laravel)</li>
          <li>― python (PySide6)</li>
          <!-- <li>― sql (MariaDB/MySQL · PostgreSQL · SQLite)</li> -->
        </ul>
      </section>

      <section>
        <h2 class="text-base font-medium">projects</h2>

        <div class="mt-2 space-y-6">
          <article v-for="(_, index) in [{}, {}, {}]" v-bind:key="index">
            <img class="h-auto w-full" src="/baa928fef9b0f2e838263dd88eefc707.png" alt="Lorem ipsum" />

            <p class="mt-1"><a class="inline-block underline underline-offset-[0.1875rem]" href="#">Lorem ipsum</a></p>
          </article>
        </div>
      </section>

      <section>
        <h2 class="text-base font-medium">links</h2>

        <ul class="mt-2 text-base/6 text-zinc-700">
          <li>
            ―
            <a
              class="inline-block underline underline-offset-[0.1875rem]"
              href="mailto://santosvilanculos@outlook.com"
              target="_blank"
            >
              email
            </a>
          </li>
          <li>
            ―
            <a
              class="inline-block underline underline-offset-[0.1875rem]"
              href="https://github.com/santosvilanculos"
              target="_blank"
            >
              github
            </a>
          </li>
          <li>
            ―
            <a
              class="inline-block underline underline-offset-[0.1875rem]"
              href="https://x.com/ssvilanculos"
              target="_blank"
            >
              x.com
            </a>
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>
