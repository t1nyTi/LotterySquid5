import React from 'react'
import PropTypes from "prop-types";

const Rounded = () => {
    return (
        <div
            style={{
                backgroundColor: "pink",
                width: "1000px",
                display: "inline-block",
                borderRadius: "10px",
                margin: "20px 20px",
                color: "purple",
                padding: "30PX 50PX",
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}
            >
                <div>
                    <h5 style={{ display: "inline-block", margin: "0 5px 0 0" }}>Round</h5>
                    <div
                        style={{
                            backgroundColor: "white",
                            width: "80px",
                            height: "30px",
                            display: "inline-block",
                            borderRadius: "10px",
                            borderColor: 'black',
                            margin: "2px 2px",
                            color: "black",
                            padding: "3PX 5PX",
                            textAlign: 'center'
                        }}
                    >
                        <p>32</p>

                    </div>
                </div>

                <div>
                    <i style={{ fontSize: "24px", marginLeft: "8px", cursor: 'pointer' }} className='fas'>&#xf359;</i>
                    <i style={{ fontSize: "24px", marginLeft: "8px", cursor: 'pointer' }} className='fas'>&#xf35a;</i>
                    <i style={{ fontSize: "24px", marginLeft: "8px", cursor: 'pointer' }} className='fas'>&#xf101;</i>
                </div>

            </div>
            <div
                style={{
                    width:"70%",
                    display: "flex",
                    alignItems: "center",
                    borderBottom: "2px solid grey" ,
                    justifyContent: "space-between",
                    marginTop: "20px"
                }}
            >
                <p style={{ margin: "0px", }}> Draw: Jan 9, 2022, 7:00 PM</p>
                <p style={{ margin: "0px",fontSize: "30px", fontWeight: "bold",  }}>$ 423,123</p>
                <p style={{ margin: "0" }}>123 players</p>
            </div>


            <div
                style={{
                    width: "100%",
                    display: "flex",
                    // flexDirection: "row",
                    margin: "40px 20px",
                    alignItems: "center",
                }}
            >

                <h4 style={{ display: "inline-block", width: "10%", margin: "0" }}>Winner</h4>
                <div style={{ fontSize: "30px", fontWeight: "bold", margin: "0 10px 0 50px", color: "red", width: "20%" }}>123 TICKET</div>
                <p style={{ margin: "0", width: "40%" }}>(0xe4F0092135280A171f66CEE1cE81F1a6Ef38dF28)</p>

            </div>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    // flexDirection: "row",
                    margin: "5px 20px",
                    alignItems: "center",
                }}
            >

                <h5 style={{ display: "inline-block", width: "10%", margin: "0" }}>Second</h5>
                <div style={{ fontSize: "25px", fontWeight: "bold", margin: "0 10px 0 50px", width: "20%" }}>123 TICKET</div>
                <p style={{ margin: "0", width: "40%" }}>(0xe4F0092135280A171f66CEE1cE81F1a6Ef38dF28)</p>

            </div>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    // flexDirection: "row",
                    margin: "5px 20px",
                    alignItems: "center",
                }}
            >

                <h5 style={{ display: "inline-block", width: "10%", margin: "0" }}>Third  </h5>
                <div style={{ fontSize: "25px", fontWeight: "bold", margin: "0 10px 0 50px", width: "20%" }}>123 TICKET</div>
                <p style={{ margin: "0", width: "40%" }}>(0xe4F0092135280A171f66CEE1cE81F1a6Ef38dF28)</p>

            </div>
        </div>
    )
}

// StatisticWidget.propTypes = {
//   	title: PropTypes.oneOfType([
// 		PropTypes.string,
// 		PropTypes.element
// 	]),
// 	value: PropTypes.string,
// 	subtitle: PropTypes.string,
// 	status: PropTypes.number,
// 	prefix: PropTypes.element
// };

export default Rounded;