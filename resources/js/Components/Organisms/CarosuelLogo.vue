<template>

    <div class=" w-screen flex justify-center items-center bg-zinc-100 overflow-hidden">
        <div class="relative w-full overflow-hidden">
            <div class="flex gap-16 p-16 animate-scroll whitespace-nowrap">
                <div class="flex space-x-16">
                    <img src="/storage/img/logo.jpg"
                        class="h-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-200" />
                    <img src="/storage/img/logo.jpg"
                        class="h-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-200" />
                    <img src="/storage/img/logo.jpg"
                        class="h-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-200" />
                    <img src="/storage/img/logo.jpg"
                        class="h-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-200" />
                    <img src="/storage/img/logo.jpg"
                        class="h-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-200" />
                </div>
            </div>
        </div>
    </div>

</template>


<style scoped>
@keyframes scroll {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-50%);
    }
}

.animate-scroll {
    display: flex;
    animation: scroll 20s linear infinite;
}

.animate-scroll:hover {
    animation-play-state: paused;
}
</style>
