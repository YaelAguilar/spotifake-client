import billie from "../../assets/billie_eilish_happier_than_ever.jpg";
import ameri from "../../assets/duki_antes_de_ameri.jpg";
import taylor from "../../assets/taylor_swift_lover.jpg";
import smithereens from "../../assets/smithereens.jpg";
import peep from "../../assets/peep.jpg";
import cerati from "../../assets/cerati.jpg";
import daltonico from "../../assets/daltonico.jpeg";
import bunkers from "../../assets/bunkers.jpeg";
import duki from "../../assets/duki.jpeg";
import nirvana from "../../assets/nirvana.jpeg";
function HomePage() {
    return (
        
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">Albums</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                <div className="flex flex-col items-center">
                  <img
                    alt="Album cover"
                    className="aspect-square overflow-hidden rounded-lg object-cover object-center"
                    height="200"
                    src={billie}
                    width="200"
                  />
                  <h3 className="mt-2 text-lg font-semibold text-white">Happier Than Ever</h3>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    alt="Album cover"
                    className="aspect-square overflow-hidden rounded-lg object-cover object-center"
                    height="200"
                    src={ameri}
                    width="200"
                  />
                  <h3 className="mt-2 text-lg font-semibold text-white">Antes de Ameri</h3>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    alt="Album cover"
                    className="aspect-square overflow-hidden rounded-lg object-cover object-center"
                    height="200"
                    src={taylor}
                    width="200"
                  />
                  <h3 className="mt-2 text-lg font-semibold text-white">Lover</h3>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    alt="Album cover"
                    className="aspect-square overflow-hidden rounded-lg object-cover object-center"
                    height="200"
                    src={smithereens}
                    width="200"
                  />
                  <h3 className="mt-2 text-lg font-semibold text-white">SMITHEREENS</h3>
                </div>
              </div>
            </div>
            <div className="space-y-4 ">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Songs</h2>
              <div className="divide-y">
              <div className="py-2 flex items-center space-x-4">
                    <img
                        alt="Album cover"
                        className="aspect-square overflow-hidden rounded-lg object-cover object-center"
                        height="50"
                        src={smithereens}
                        width="50"
                    />
                    <div>
                        <h3 className="text-lg font-semibold text-white">Feeling Like The End</h3>
                        <p className="text-gray-500">Joji</p>
                    </div>
                </div>
                <div className="py-2 flex items-center space-x-4">
                <img
                        alt="Album cover"
                        className="aspect-square overflow-hidden rounded-lg object-cover object-center"
                        height="50"
                        src={cerati}
                        width="50"
                    />
                    <div>
                    <h3 className="text-lg font-semibold text-white">Bocanada</h3>
                  <p className="text-gray-500">Gustavo Cerati</p>
                    </div>
                </div>
                <div className="py-2 flex items-center space-x-4">
                <img
                        alt="Album cover"
                        className="aspect-square overflow-hidden rounded-lg object-cover object-center"
                        height="50"
                        src={peep}
                        width="50"
                    />
                    <div>
                    <h3 className="text-lg font-semibold text-white">hellboy</h3>
                  <p className="text-gray-500">Lil Peep </p>
                    </div>
                </div>
                <div className="py-2 flex items-center space-x-4">
                <img
                        alt="Album cover"
                        className="aspect-square overflow-hidden rounded-lg object-cover object-center"
                        height="50"
                        src={daltonico}
                        width="50"
                    />
                    <div>
                    <h3 className="text-lg font-semibold text-white">Madrugada</h3>
                  <p className="text-gray-500">Enjambre</p>
                    </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Artists</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                <div className="flex flex-col items-center">
                  <img
                    alt="Artist photo"
                    className="aspect-square overflow-hidden rounded-full object-cover object-center"
                    height="200"
                    src={bunkers}
                    width="200"
                  />
                  <h3 className="mt-2 text-lg font-semibold text-white">Los Bunkers</h3>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    alt="Artist photo"
                    className="aspect-square overflow-hidden rounded-full object-cover object-center"
                    height="200"
                    src={duki}
                    width="200"
                  />
                  <h3 className="mt-2 text-lg font-semibold text-white">Duki</h3>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    alt="Artist photo"
                    className="aspect-square overflow-hidden rounded-full object-cover object-center"
                    height="200"
                    src={cerati}
                    width="200"
                  />
                  <h3 className="mt-2 text-lg font-semibold text-white">Gustavo Cerati</h3>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    alt="Artist photo"
                    className="aspect-square overflow-hidden rounded-full object-cover object-center"
                    height="200"
                    src={nirvana}
                    width="200"
                  />
                  <h3 className="mt-2 text-lg font-semibold text-white">Nirvana</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default HomePage;