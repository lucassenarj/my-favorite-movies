const calculateRate = (rate: number) => {
  let rates = [];
  const lastItem = (<i className="fa fa-star-half-o" key={10} title={`${rate}/10`}></i>);
  for (let i = 1; (i*2)<rate; i++) {
    rates.push(<i className="fa fa-star" key={i} title={`${rate}/10`}></i>);
  }
  rates.push(lastItem);
  return rates;
}

export default calculateRate;