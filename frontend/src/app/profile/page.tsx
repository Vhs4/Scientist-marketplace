import SkillDescription from "@/components/skills"

export default function Home() {
    return (
        <>
            <div className="justify-center items-center flex flex-col bg-zinc-800 px-5">
                <div className="grid grid-cols-2 gap-5 max-w-[900px] w-full self-center flex-col bg-white my-56 py-0.5 rounded-3xl max-md:mt-52">
                    <div className="col-span-1">
                        <img
                            loading="lazy"
                            srcSet="https://media.discordapp.net/attachments/1015315462550200363/1160543999229173830/3604312f300bc0e221fa665a09977376.png?ex=65350bd3&is=652296d3&hm=3f60d5e59a5d0688d69170a3d8468ac35b6ecd2677282701b3e635446de87501&=&width=378&height=473"
                            className="aspect-[1.19] object-cover object-center w-full -mt-0.5 rounded-3xl"
                        />
                    </div>
                    <div className="col-span-1 flex flex-col">
                        <div className="text-zinc-800 text-4xl font-semibold self-center -ml-px mt-12">
                            Pedro Gonçalves
                        </div>
                        <div className="text-neutral-950 text-2xl self-center -ml-px mt-3.5">
                            Software developer
                        </div>
                        <div className="text-stone-500 text-2xl self-center mt-1">
                            08:00 AM - 09:00 PM
                        </div>
                        <div className="flex flex-row self-center gap-2 mt-4">
                            <img
                                loading="lazy"
                                srcSet="../assets/location.svg"
                                className="object-cover object-center w-6 self-center my-auto"
                            />
                            <div className="text-neutral-950 text-2xl self-center my-auto">
                                London, UK
                            </div>
                        </div>
                        <a href="" className="flex justify-center">
                            <div className="justify-between items-start shadow-[0px_5px_5px_0px_rgba(10,10,10,0.10)_inset] self-center flex w-[170px] flex-row gap-2 bg-white ml-px mt-24 mb-2.5 px-5 py-4 rounded-xl">
                                <img
                                    loading="lazy"
                                    srcSet="../assets/email.svg"
                                    className="aspect-square object-cover object-center w-6 shrink-0"
                                />
                                <p className="flex items-center w-full text-neutral-950 text-base font-semibold self-stretch">
                                    Get in touch
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className="col-span-2 bg-gray-100 p-5 rounded-r-3xl">
                        <div className="text-neutral-950 text-2xl font-semibold mb-3">
                            Skills
                        </div>
                        <ul>
                            <SkillDescription skill="Data analysis" senioridade="Junior" corTexto="text-cyan-700" corBarra="bg-teal-300" corBarrinha="bg-teal-300" />
                            <SkillDescription skill="Scientific Observation" senioridade="Pleno" corTexto="text-teal-800" corBarra="bg-green-400" corBarrinha="bg-green-400" />
                            <SkillDescription skill="Laboratory Methods" senioridade="Sênior" corTexto="text-black" corBarra="bg-yellow-400" corBarrinha="bg-yellow-400" />
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}