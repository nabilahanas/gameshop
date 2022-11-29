

export default function Footer() {
  return (
    <footer class=" bg-black text-gray-600 body-font ">

      <div class="bg-black">
        <div class="container mx-auto py-4 px-5 flex flex-wrap justify-center flex-col sm:flex-row">
          <p class="text-slate-200 text-sm text-center sm:text-left">
            Copyright © 2022 — {" "} 
            <a href="https://github.com/nabilahanas" target="_blank" rel="noreferrer">
              <span className="hover:text-emerald-300 text-slate-200">
                @nabilahanas
              </span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
