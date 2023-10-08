interface SkillDescriptionProps {
  skill: string;
  senioridade: string;
  corTexto: string;
  corBarrinha: string;
  corBarra: string;
}

const SkillDescription: React.FC<SkillDescriptionProps> = ({ skill, senioridade, corTexto, corBarra, corBarrinha }) => {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold">{skill}</h3>
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className={`text-md font-semibold inline-block py-1 px-2 rounded-full ${corTexto} ${corBarrinha}`}>
              {senioridade}
            </span>
          </div>
        </div>
        <div className="flex space-x-3">
          <div className={`flex-auto h-2 ${corBarra} rounded-full`} />
          <div className={`w-16 h-2 ${corBarrinha}rounded-full`} />
        </div>
      </div>
    </div>
  );
};

export default SkillDescription;
