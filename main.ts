basic.forever(function () {
    if (mbit_Robot.Avoid_Sensor(mbit_Robot.enAvoidState.NOOBSTACLE)) {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Run)
    } else {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Back)
        basic.pause(1000)
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_SpinLeft)
        basic.pause(1000)
    }
})
