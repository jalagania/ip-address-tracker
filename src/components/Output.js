import "./Output.css";

function Output(props) {
  return (
    <div className="info-box">
      <div className="box ip-box">
        <p className="text-s ip-text">IP Address</p>
        <p className="text-l ip-address">{props.ip}</p>
      </div>

      <div className="separator-box"></div>

      <div className="box location-box">
        <p className="text-s location-text">Location</p>
        <p className="text-l location-address">{props.location}</p>
        <p className="text-l location-postcode">{props.postcode}</p>
      </div>

      <div className="separator-box"></div>

      <div className="box timezone-box">
        <p className="text-s timezone-text">Timezone</p>
        <p className="text-l timezone">{props.timezone}</p>
      </div>

      <div className="separator-box"></div>

      <div className="box isp-box">
        <p className="text-s isp-text">ISP</p>
        <p className="text-l isp-name">{props.isp}</p>
      </div>
    </div>
  );
}

export default Output;
