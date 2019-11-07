package com.example.justdance

import android.content.Context
import android.hardware.Sensor
import android.hardware.SensorEvent
import android.hardware.SensorEventListener
import android.hardware.SensorManager
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ImageView

class Dance : AppCompatActivity(), SensorEventListener {
    lateinit var sensorManager: SensorManager

    var sensor: Sensor?= null

    override fun onAccuracyChanged(p0: Sensor?, p1: Int) {

    }

    var status = 0
    var mcont = 0
    var flag:Boolean = false

    override fun onSensorChanged(event: SensorEvent?) {
        var x = event!!.values[0]
        var y = event.values[1]
        var z = event.values[2]

        if (y < 5.0 && z < 5.0 && x < -7.5){
            //"horizontal a la derecha"
            if(status == 0){
                status++
//                mcont++
            }
        }else if (x < 5.0 && z < 5.0 && y > 7.5) {
            //"VERTICAL"
            if(status == 1){
                flag = true
                status++
            }
        }else if (y < 5.0 && z < 5.0 && x > 7.5) {
            //"horizontal a la izquierda"
            if (status == 2) {
                status++
            }
        }
        if(flag){
            mcont++
            flag = false
            status = 0
        }

    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_dance)

        sensorManager = getSystemService(Context.SENSOR_SERVICE) as SensorManager
        sensor = sensorManager.getDefaultSensor(Sensor.TYPE_ACCELEROMETER)
        sensorManager.registerListener(this, sensor, SensorManager.SENSOR_DELAY_NORMAL)
        
    }
}
