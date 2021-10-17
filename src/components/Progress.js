/* eslint-disable no-unused-vars */
const Progress = (props) => {
  const subCount = props.count;
  const tecnology = props.tecnology;
  const subsPercent = subCount / 1;
  const numberProject = props.numberProject;

  return (
    <div className="div-geral">
      <div className="progress-bar" >
        <div className={`progress-language-${numberProject}`} style={{ width: `${subsPercent}%` }}>
         <div className="progress-text">
         <div className="tecnology-title">{tecnology}</div>
          <div className={`percentage-title-${numberProject}`}>
            {`${subsPercent}`} <i className="fas fa-percentage"></i>
          </div>
         </div>
          </div>
      </div>
    </div>
  );
};

export default Progress;
