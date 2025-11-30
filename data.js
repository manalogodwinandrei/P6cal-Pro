// ===========================
// GRAVITY CONSTANTS
// ===========================
const gravityValues = {
    earth: 9.8,
    moon: 1.62,
    mars: 3.71,
    jupiter: 24.79,
    venus: 8.87,
    saturn: 10.44,
    mercury: 3.7,
    uranus: 8.69,
    neptune: 11.15,
    custom: 9.8
};

// ===========================
// CONVERSION DATA
// ===========================
const conversionData = {
    length: {
        units: ['millimeters (mm)', 'centimeters (cm)', 'decimeters (dm)', 'meters (m)', 'dekameters (dam)', 'hectometers (hm)', 'kilometers (km)', 'inches (in)', 'feet (ft)', 'yards (yd)', 'miles (mi)'],
        factors: {
            'millimeters (mm)': 1,
            'centimeters (cm)': 10,
            'decimeters (dm)': 100,
            'meters (m)': 1000,
            'dekameters (dam)': 10000,
            'hectometers (hm)': 100000,
            'kilometers (km)': 1000000,
            'inches (in)': 25.4,
            'feet (ft)': 304.8,
            'yards (yd)': 914.4,
            'miles (mi)': 1609344
        }
    },
    area: {
        units: ['square millimeters (mm²)', 'square centimeters (cm²)', 'square decimeters (dm²)', 'square meters (m²)', 'ares (a)', 'hectares (ha)', 'square inches (in²)', 'square feet (ft²)', 'square yards (yd²)', 'acres', 'square miles (mi²)'],
        factors: {
            'square millimeters (mm²)': 1,
            'square centimeters (cm²)': 100,
            'square decimeters (dm²)': 10000,
            'square meters (m²)': 1000000,
            'ares (a)': 100000000,
            'hectares (ha)': 10000000000,
            'square inches (in²)': 645.16,
            'square feet (ft²)': 92903.04,
            'square yards (yd²)': 836127.36,
            'acres': 4046856422.4,
            'square miles (mi²)': 2589988110336
        }
    },
    volume: {
        units: ['cubic centimeters (cc/cm³)', 'milliliters (mL)', 'liters (L)', 'hectoliters (hL)', 'kiloliters (kL)', 'teaspoons (tsp)', 'tablespoons (tbsp)', 'fluid ounces (fl oz)', 'cups (c)', 'pints (pt)', 'quarts (qt)', 'gallons (gal)', 'cubic inches (in³)', 'cubic feet (ft³)', 'cubic yards (yd³)', 'cord'],
        factors: {
            'cubic centimeters (cc/cm³)': 1,
            'milliliters (mL)': 1,
            'liters (L)': 1000,
            'hectoliters (hL)': 100000,
            'kiloliters (kL)': 1000000,
            'teaspoons (tsp)': 4.92892,
            'tablespoons (tbsp)': 14.7868,
            'fluid ounces (fl oz)': 29.5735,
            'cups (c)': 236.588,
            'pints (pt)': 473.176,
            'quarts (qt)': 946.353,
            'gallons (gal)': 3785.41,
            'cubic inches (in³)': 16.387064,
            'cubic feet (ft³)': 28316.8466,
            'cubic yards (yd³)': 764554.858,
            'cord': 3624556.364
        }
    },
    mass: {
        units: ['milligrams (mg)', 'centigrams (cg)', 'grams (g)', 'kilograms (kg)', 'metric tons (t)', 'ounces (oz)', 'pounds (lb)', 'tons (T)'],
        factors: {
            'milligrams (mg)': 1,
            'centigrams (cg)': 10,
            'grams (g)': 1000,
            'kilograms (kg)': 1000000,
            'metric tons (t)': 1000000000,
            'ounces (oz)': 28349.5,
            'pounds (lb)': 453592,
            'tons (T)': 907184740
        }
    },
    time: {
        units: ['microseconds (μs)', 'milliseconds (ms)', 'seconds (s)', 'minutes (min)', 'hours (h)', 'days (d)', 'months', 'years (yr)', 'banking years'],
        factors: {
            'microseconds (μs)': 0.001,
            'milliseconds (ms)': 1,
            'seconds (s)': 1000,
            'minutes (min)': 60000,
            'hours (h)': 3600000,
            'days (d)': 86400000,
            'months': 2592000000,
            'years (yr)': 31536000000,
            'banking years': 31104000000
        }
    },
    temperature: {
        units: ['Celsius (°C)', 'Fahrenheit (°F)', 'Kelvin (K)'],
        special: true
    },
    energy: {
        units: ['Joules (J)', 'kilojoules (kJ)', 'calories (cal)', 'kilocalories (kcal)', 'kWh'],
        factors: {
            'Joules (J)': 1,
            'kilojoules (kJ)': 1000,
            'calories (cal)': 4.184,
            'kilocalories (kcal)': 4184,
            'kWh': 3600000
        }
    },
    pressure: {
        units: ['Pascal (Pa)', 'kilopascal (kPa)', 'bar', 'atm', 'psi'],
        factors: {
            'Pascal (Pa)': 1,
            'kilopascal (kPa)': 1000,
            'bar': 100000,
            'atm': 101325,
            'psi': 6894.76
        }
    }
};

// ===========================
// PHYSICS FORMULAS DATA
// ===========================
const physicsFormulas = {
    vector: {
        magnitude: {
            name: 'Vector Magnitude',
            formulas: ['R = √(x² + y²)', 'R = √(A² + B²)'],
            inputs: [
                { name: 'x', label: 'X Component', unit: '' },
                { name: 'y', label: 'Y Component', unit: '' }
            ],
            calculate: (inputs) => {
                const x = parseFloat(inputs.x) || 0;
                const y = parseFloat(inputs.y) || 0;
                const magnitude = Math.sqrt(x * x + y * y);
                return {
                    result: magnitude,
                    unit: 'units',
                    steps: [
                        `Given: x = ${x}, y = ${y}`,
                        `Formula: R = √(x² + y²)`,
                        `R = √(${x}² + ${y}²)`,
                        `R = √(${x*x} + ${y*y})`,
                        `R = √${x*x + y*y}`,
                        `R = ${magnitude.toFixed(4)} units`
                    ]
                };
            }
        },
        direction: {
            name: 'Vector Direction (Angle)',
            formulas: ['θ = tan⁻¹(y/x)'],
            inputs: [
                { name: 'x', label: 'X Component', unit: '' },
                { name: 'y', label: 'Y Component', unit: '' }
            ],
            calculate: (inputs) => {
                const x = parseFloat(inputs.x) || 0;
                const y = parseFloat(inputs.y) || 0;
                const angle = Math.atan2(y, x) * (180 / Math.PI);
                return {
                    result: angle,
                    unit: '°',
                    steps: [
                        `Given: x = ${x}, y = ${y}`,
                        `Formula: θ = tan⁻¹(y/x)`,
                        `θ = tan⁻¹(${y}/${x})`,
                        `θ = ${angle.toFixed(4)}°`
                    ]
                };
            }
        },
        components: {
            name: 'Vector Components',
            formulas: ['x = R cos θ', 'y = R sin θ'],
            inputs: [
                { name: 'magnitude', label: 'Magnitude (R)', unit: '' },
                { name: 'angle', label: 'Angle (θ)', unit: '°' }
            ],
            calculate: (inputs) => {
                const R = parseFloat(inputs.magnitude) || 0;
                const theta = parseFloat(inputs.angle) || 0;
                const rad = theta * (Math.PI / 180);
                const x = R * Math.cos(rad);
                const y = R * Math.sin(rad);
                return {
                    result: `x = ${x.toFixed(4)}, y = ${y.toFixed(4)}`,
                    unit: '',
                    steps: [
                        `Given: R = ${R}, θ = ${theta}°`,
                        `Formulas: x = R cos θ, y = R sin θ`,
                        `x = ${R} × cos(${theta}°) = ${x.toFixed(4)}`,
                        `y = ${R} × sin(${theta}°) = ${y.toFixed(4)}`
                    ]
                };
            }
        },
        lawOfCosines: {
            name: 'Law of Cosines',
            formulas: ['c² = a² + b² - 2ab cos(C)', 'c = √(a² + b² - 2ab cos(C))'],
            inputs: [
                { name: 'a', label: 'Side a', unit: '' },
                { name: 'b', label: 'Side b', unit: '' },
                { name: 'angleC', label: 'Angle C', unit: '°' }
            ],
            calculate: (inputs) => {
                const a = parseFloat(inputs.a) || 0;
                const b = parseFloat(inputs.b) || 0;
                const angleC = parseFloat(inputs.angleC) || 0;
                const radC = angleC * (Math.PI / 180);
                const cSquared = a * a + b * b - 2 * a * b * Math.cos(radC);
                const c = Math.sqrt(cSquared);
                return {
                    result: c,
                    unit: 'units',
                    steps: [
                        `Given: a = ${a}, b = ${b}, C = ${angleC}°`,
                        `Formula: c² = a² + b² - 2ab cos(C)`,
                        `c² = ${a}² + ${b}² - 2(${a})(${b})cos(${angleC}°)`,
                        `c² = ${a*a} + ${b*b} - ${2*a*b} × ${Math.cos(radC).toFixed(4)}`,
                        `c² = ${a*a} + ${b*b} - ${(2*a*b*Math.cos(radC)).toFixed(4)}`,
                        `c² = ${cSquared.toFixed(4)}`,
                        `c = √${cSquared.toFixed(4)}`,
                        `c = ${c.toFixed(4)} units`
                    ]
                };
            }
        },
lawOfSines: {
    name: 'Law of Sines',
    formulas: ['a/sin(A) = b/sin(B) = c/sin(C)'],
    inputs: [
        { name: 'a', label: 'Side a (known)', unit: '' },
        { name: 'angleA', label: 'Angle A', unit: '°' },
        { name: 'angleB', label: 'Angle B', unit: '°' }
    ],
    calculate: (inputs) => {
        const a = parseFloat(inputs.a) || 0;
        const angleA = parseFloat(inputs.angleA) || 1;
        const angleB = parseFloat(inputs.angleB) || 0;
        const radA = angleA * (Math.PI / 180);
        const radB = angleB * (Math.PI / 180);
        const b = (a * Math.sin(radB)) / Math.sin(radA);
        return {
            result: b,
            unit: 'units',
            steps: [
                `Given: a = ${a}, A = ${angleA}°, B = ${angleB}°`,
                `Formula: a/sin(A) = b/sin(B)`,
                `b = a × sin(B)/sin(A)`,
                `b = ${a} × sin(${angleB}°)/sin(${angleA}°)`,
                `b = ${a} × ${Math.sin(radB).toFixed(4)}/${Math.sin(radA).toFixed(4)}`,
                `b = ${(a * Math.sin(radB)).toFixed(4)}/${Math.sin(radA).toFixed(4)}`,
                `b = ${b.toFixed(4)} units`
            ]
        };
    }
  }
},
kinematics_horizontal: {
    speed: {
        name: 'Speed',
        formulas: ['s = d/t'],
        inputs: [
            { name: 'd', label: 'Distance (d)', unit: 'm' },
            { name: 't', label: 'Time (t)', unit: 's' }
        ],
        calculate: (inputs) => {
            const d = parseFloat(inputs.d) || 0;
            const t = parseFloat(inputs.t) || 1;
            const s = d / t;
            return {
                result: s,
                unit: 'm/s',
                steps: [
                    `Given: d = ${d} m, t = ${t} s`,
                    `Formula: s = d/t`,
                    `s = ${d}/${t}`,
                    `s = ${s.toFixed(4)} m/s`
                ]
            };
        }
    },
    velocity: {
        name: 'Velocity',
        formulas: ['v = displacement/total time'],
        inputs: [
            { name: 'displacement', label: 'Displacement', unit: 'm' },
            { name: 'time', label: 'Total Time', unit: 's' }
        ],
        calculate: (inputs) => {
            const disp = parseFloat(inputs.displacement) || 0;
            const time = parseFloat(inputs.time) || 1;
            const v = disp / time;
            return {
                result: v,
                unit: 'm/s',
                steps: [
                    `Given: displacement = ${disp} m, time = ${time} s`,
                    `Formula: v = displacement/time`,
                    `v = ${disp}/${time}`,
                    `v = ${v.toFixed(4)} m/s`
                ]
            };
        }
    },
    finalVelocity: {
        name: 'Final Velocity',
        formulas: ['vf = vi + at', 'vf² = vi² + 2ad'],
        inputs: [
            { name: 'vi', label: 'Initial Velocity (vi)', unit: 'm/s' },
            { name: 'a', label: 'Acceleration (a)', unit: 'm/s²' },
            { name: 't', label: 'Time (t)', unit: 's' }
        ],
        calculate: (inputs) => {
            const vi = parseFloat(inputs.vi) || 0;
            const a = parseFloat(inputs.a) || 0;
            const t = parseFloat(inputs.t) || 0;
            const vf = vi + a * t;
            return {
                result: vf,
                unit: 'm/s',
                steps: [
                    `Given: vi = ${vi} m/s, a = ${a} m/s², t = ${t} s`,
                    `Formula: vf = vi + at`,
                    `vf = ${vi} + (${a} × ${t})`,
                    `vf = ${vi} + ${a*t}`,
                    `vf = ${vf.toFixed(4)} m/s`
                ]
            };
        }
    },
    distance: {
        name: 'Distance',
        formulas: ['d = vi×t + ½ at²'],
        inputs: [
            { name: 'vi', label: 'Initial Velocity (vi)', unit: 'm/s' },
            { name: 't', label: 'Time (t)', unit: 's' },
            { name: 'a', label: 'Acceleration (a)', unit: 'm/s²' }
        ],
        calculate: (inputs) => {
            const vi = parseFloat(inputs.vi) || 0;
            const t = parseFloat(inputs.t) || 0;
            const a = parseFloat(inputs.a) || 0;
            const d = vi * t + 0.5 * a * t * t;
            return {
                result: d,
                unit: 'm',
                steps: [
                    `Given: vi = ${vi} m/s, t = ${t} s, a = ${a} m/s²`,
                    `Formula: d = vi×t + ½ at²`,
                    `d = ${vi}×${t} + ½×${a}×${t}²`,
                    `d = ${vi*t} + ${0.5*a*t*t}`,
                    `d = ${d.toFixed(4)} m`
                ]
            };
        }
    },
    acceleration: {
        name: 'Acceleration',
        formulas: ['a = (v₂ - v₁)/(t₂ - t₁)'],
        inputs: [
            { name: 'v2', label: 'Final Velocity (v₂)', unit: 'm/s' },
            { name: 'v1', label: 'Initial Velocity (v₁)', unit: 'm/s' },
            { name: 't2', label: 'Final Time (t₂)', unit: 's' },
            { name: 't1', label: 'Initial Time (t₁)', unit: 's' }
        ],
        calculate: (inputs) => {
            const v2 = parseFloat(inputs.v2) || 0;
            const v1 = parseFloat(inputs.v1) || 0;
            const t2 = parseFloat(inputs.t2) || 1;
            const t1 = parseFloat(inputs.t1) || 0;
            const a = (v2 - v1) / (t2 - t1);
            return {
                result: a,
                unit: 'm/s²',
                steps: [
                    `Given: v₂ = ${v2} m/s, v₁ = ${v1} m/s, t₂ = ${t2} s, t₁ = ${t1} s`,
                    `Formula: a = (v₂ - v₁)/(t₂ - t₁)`,
                    `a = (${v2} - ${v1})/(${t2} - ${t1})`,
                    `a = ${v2-v1}/${t2-t1}`,
                    `a = ${a.toFixed(4)} m/s²`
                ]
            };
        }
    },

    // ===========================
    // New tab: Time
    // ===========================
    time: {
        name: 'Time',
        formulas: ['t = d/s', 't = (vf - vi)/a', 't = solve quadratic: d = vi*t + ½ a*t²'],
        inputs: [
            { name: 'd', label: 'Distance (optional)', unit: 'm' },
            { name: 's', label: 'Speed (optional)', unit: 'm/s' },
            { name: 'vi', label: 'Initial Velocity (optional)', unit: 'm/s' },
            { name: 'vf', label: 'Final Velocity (optional)', unit: 'm/s' },
            { name: 'a', label: 'Acceleration (optional)', unit: 'm/s²' }
        ],
        calculate: (inputs) => {
            const d = parseFloat(inputs.d);
            const s = parseFloat(inputs.s);
            const vi = parseFloat(inputs.vi);
            const vf = parseFloat(inputs.vf);
            const a = parseFloat(inputs.a);
            let t, steps = [];

            if (!isNaN(d) && !isNaN(s)) {
                t = d / s;
                steps = [
                    `Given: d = ${d} m, s = ${s} m/s`,
                    `Formula: t = d/s`,
                    `t = ${d}/${s} = ${t.toFixed(4)} s`
                ];
            } else if (!isNaN(vf) && !isNaN(vi) && !isNaN(a)) {
                t = (vf - vi) / a;
                steps = [
                    `Given: vi = ${vi} m/s, vf = ${vf} m/s, a = ${a} m/s²`,
                    `Formula: t = (vf - vi)/a`,
                    `t = (${vf} - ${vi}) / ${a} = ${t.toFixed(4)} s`
                ];
            } else if (!isNaN(d) && !isNaN(vi) && !isNaN(a)) {
                const quadA = 0.5 * a;
                const quadB = vi;
                const quadC = -d;
                const discriminant = quadB*quadB - 4*quadA*quadC;
                if (discriminant < 0) return { result: null, unit: 's', steps: ['No real solution for time.'] };
                const t1 = (-quadB + Math.sqrt(discriminant)) / (2*quadA);
                const t2 = (-quadB - Math.sqrt(discriminant)) / (2*quadA);
                t = Math.max(t1, t2);
                steps = [
                    `Given: vi = ${vi} m/s, a = ${a} m/s², d = ${d} m`,
                    `Formula: d = vi*t + ½ a*t²`,
                    `Solve quadratic: 0.5*${a}*t² + ${vi}*t - ${d} = 0`,
                    `t = ${t.toFixed(4)} s (positive root)`
                ];
            } else {
                return { result: null, unit: 's', steps: ['Insufficient data to calculate time.'] };
            }

            return { result: t, unit: 's', steps };
        }
    }
},


kinematics_vertical: {
    finalVelocity: {
        name: 'Final Velocity (Vertical)',
        formulas: ['vf = vi + gt', 'vf² = vi² + 2gh'],
        usesGravity: true,
        inputs: [
            { name: 'vi', label: 'Initial Velocity (vi)', unit: 'm/s' },
            { name: 't', label: 'Time (t)', unit: 's' }
        ],
        calculate: (inputs, g = 9.8) => {
            const vi = parseFloat(inputs.vi) || 0;
            const t = parseFloat(inputs.t) || 0;
            const vf = vi + g * t;
            return {
                result: vf,
                unit: 'm/s',
                steps: [
                    `Given: vi = ${vi} m/s, t = ${t} s, g = ${g} m/s²`,
                    `Formula: vf = vi + gt`,
                    `vf = ${vi} + (${g} × ${t})`,
                    `vf = ${vi + g*t}`,
                    `vf = ${vf.toFixed(4)} m/s`
                ]
            };
        }
    },
    height: {
        name: 'Height',
        formulas: ['h = vi×t + ½ gt²'],
        usesGravity: true,
        inputs: [
            { name: 'vi', label: 'Initial Velocity (vi)', unit: 'm/s' },
            { name: 't', label: 'Time (t)', unit: 's' }
        ],
        calculate: (inputs, g = 9.8) => {
            const vi = parseFloat(inputs.vi) || 0;
            const t = parseFloat(inputs.t) || 0;
            const h = vi * t + 0.5 * g * t * t;
            return {
                result: h,
                unit: 'm',
                steps: [
                    `Given: vi = ${vi} m/s, t = ${t} s, g = ${g} m/s²`,
                    `Formula: h = vi×t + ½ gt²`,
                    `h = ${vi}×${t} + ½×${g}×${t}²`,
                    `h = ${vi*t} + ${0.5*g*t*t}`,
                    `h = ${h.toFixed(4)} m`
                ]
            };
        }
    },
time: {
    name: 'Time',
    formulas: [
        't = (vf - vi)/(-g)',
        't = solve h = vi*t - ½ g t²'
    ],
    usesGravity: true,
    inputs: [
        { name: 'vi', label: 'Initial Velocity (vi)', unit: 'm/s' },
        { name: 'h', label: 'Height (h) (optional)', unit: 'm', optional: true }
    ],
    calculate: (inputs, g = 9.8) => {
        const vi = parseFloat(inputs.vi) || 0;
        const h = (inputs.h !== undefined && inputs.h !== '') ? parseFloat(inputs.h) : null;

        let t = null;
        let method = '';
        let t1 = null, t2 = null;
        let a = null, b = null, c = null;

        try {
            if (h !== null) {
                a = -0.5 * g;
                b = vi;
                c = -h;
                const discriminant = b*b - 4*a*c;

                if (discriminant < 0) {
                    return {
                        result: null,
                        unit: 's',
                        steps: ['No real solution for the given height']
                    };
                }

                t1 = (-b + Math.sqrt(discriminant)) / (2*a);
                t2 = (-b - Math.sqrt(discriminant)) / (2*a);
                t = Math.max(t1, t2);
                method = `Solved using h = vi*t - ½ g*t²`;
            } else {
                t = 2 * vi / g;
                method = `Total flight time using t = 2*vi/g`;
            }

            const steps = [
                `Given: vi = ${vi} m/s, g = ${g} m/s²${h !== null ? `, h = ${h} m` : ''}`,
                `Formulas for reference:`,
                `1) t = (vf - vi)/(-g)`,
                `2) Solve h = vi*t - ½ g*t²`,
                `Calculation method: ${method}`
            ];

            if (h !== null) {
                steps.push(`Quadratic: ${a}*t² + ${b}*t + ${c} = 0`);
                steps.push(`t1 = ${t1.toFixed(4)}, t2 = ${t2.toFixed(4)}`);
                steps.push(`Positive root chosen: t = ${t.toFixed(4)} s`);
            } else {
                steps.push(`t = 2*${vi}/${g}`);
                steps.push(`t = ${t.toFixed(4)} s`);
            }

            return { result: t, unit: 's', steps: steps };
        } catch (error) {
            return {
                result: null,
                unit: 's',
                steps: ['Error in calculation: ' + error.message]
            };
        }
    }
}

},


kinematics_projectile: {
rangeHorizontal: {
    name: 'Range (Horizontal)',
    formulas: ['R = vi × t'],
    usesGravity: false,
    inputs: [
        { name: 'vi', label: 'Initial Velocity (vi)', unit: 'm/s' },
        { name: 'time', label: 'Time (t)', unit: 's' }
    ],
    calculate: (inputs) => {
        const vi = parseFloat(inputs.vi) || 0;
        const t = parseFloat(inputs.time) || 0;
        const R = vi * t;
        return {
            result: R,
            unit: 'm',
            steps: [
                `Given: vi = ${vi} m/s, t = ${t} s`,
                `Formula: R = vi × t`,
                `R = ${vi} × ${t} = ${R.toFixed(4)} m`
            ]
        };
    }
},

rangeWithAngleAndTime: {
    name: 'Range with Angle and Time',
    formulas: ['R = (vi × cosθ) × t'],
    usesGravity: false,
    inputs: [
        { name: 'vi', label: 'Initial Velocity (vi)', unit: 'm/s' },
        { name: 'angle', label: 'Launch Angle (θ)', unit: '°' },
        { name: 'time', label: 'Time (t)', unit: 's' }
    ],
    calculate: (inputs) => {
        const vi = parseFloat(inputs.vi) || 0;
        const angle = parseFloat(inputs.angle) || 0;
        const t = parseFloat(inputs.time) || 0;
        const rad = angle * (Math.PI / 180);
        const R = vi * Math.cos(rad) * t;
        return {
            result: R,
            unit: 'm',
            steps: [
                `Given: vi = ${vi} m/s, θ = ${angle}°, t = ${t} s`,
                `Formula: R = (vi × cosθ) × t`,
                `R = (${vi} × cos(${angle}°)) × ${t} = ${R.toFixed(4)} m`
            ]
        };
    }
},

rangeWithVelocityAndAngle: {
    name: 'Range from Initial Velocity and Angle',
    formulas: ['R = (vi² × sinθ)/g'],
    usesGravity: true,
    inputs: [
        { name: 'vi', label: 'Initial Velocity (vi)', unit: 'm/s' },
        { name: 'angle', label: 'Launch Angle (θ)', unit: '°' }
    ],
    calculate: (inputs, g = 9.8) => {
        const vi = parseFloat(inputs.vi) || 0;
        const angle = parseFloat(inputs.angle) || 0;
        const rad = angle * (Math.PI / 180);
        const R = (vi ** 2 * Math.sin(rad)) / g;
        return {
            result: R,
            unit: 'm',
            steps: [
                `Given: vi = ${vi} m/s, θ = ${angle}°, g = ${g} m/s²`,
                `Formula: R = (vi² × sinθ)/g`,
                `R = (${vi}² × sin(${angle}°)) / ${g} = ${R.toFixed(4)} m`
            ]
        };
    }
},


        timeOfFlight: {
            name: 'Time of Flight',
            formulas: ['t = (2vi×sinθ)/g'],
            usesGravity: true,
            inputs: [
                { name: 'vi', label: 'Initial Velocity (vi)', unit: 'm/s' },
                { name: 'angle', label: 'Launch Angle (θ)', unit: '°' }
            ],
            calculate: (inputs, g = 9.8) => {
                const vi = parseFloat(inputs.vi) || 0;
                const angle = parseFloat(inputs.angle) || 0;
                const rad = angle * (Math.PI / 180);
                const t = (2 * vi * Math.sin(rad)) / g;
                return {
                    result: t,
                    unit: 's',
                    steps: [
                        `Given: vi = ${vi} m/s, θ = ${angle}°, g = ${g} m/s²`,
                        `Formula: t = (2vi×sinθ)/g`,
                        `t = (2×${vi}×sin(${angle}°))/${g}`,
                        `t = (${2*vi}×${Math.sin(rad).toFixed(4)})/${g}`,
                        `t = ${t.toFixed(4)} s`
                    ]
                };
            }
        },
        maxHeight: {
            name: 'Maximum Height',
            formulas: ['h_max = (vi²sin²θ)/(2g)'],
            usesGravity: true,
            inputs: [
                { name: 'vi', label: 'Initial Velocity (vi)', unit: 'm/s' },
                { name: 'angle', label: 'Launch Angle (θ)', unit: '°' }
            ],
            calculate: (inputs, g = 9.8) => {
                const vi = parseFloat(inputs.vi) || 0;
                const angle = parseFloat(inputs.angle) || 0;
                const rad = angle * (Math.PI / 180);
                const h = (vi * vi * Math.sin(rad) * Math.sin(rad)) / (2 * g);
                return {
                    result: h,
                    unit: 'm',
                    steps: [
                        `Given: vi = ${vi} m/s, θ = ${angle}°, g = ${g} m/s²`,
                        `Formula: h_max = (vi²sin²θ)/(2g)`,
                        `h_max = (${vi}² × sin²(${angle}°))/(2×${g})`,
                        `h_max = (${vi*vi} × ${(Math.sin(rad)*Math.sin(rad)).toFixed(4)})/${2*g}`,
                        `h_max = ${h.toFixed(4)} m`
                    ]
                };
            }
        }
    },
    dynamics_forces: {
        force: {
            name: 'Force',
            formulas: ['F = ma'],
            inputs: [
                { name: 'm', label: 'Mass (m)', unit: 'kg' },
                { name: 'a', label: 'Acceleration (a)', unit: 'm/s²' }
            ],
            calculate: (inputs) => {
                const m = parseFloat(inputs.m) || 0;
                const a = parseFloat(inputs.a) || 0;
                const F = m * a;
                return {
                    result: F,
                    unit: 'N',
                    steps: [
                        `Given: m = ${m} kg, a = ${a} m/s²`,
                        `Formula: F = ma`,
                        `F = ${m} × ${a}`,
                        `F = ${F.toFixed(4)} N`
                    ]
                };
            }
        },
        weight: {
            name: 'Weight (Gravitational Force)',
            formulas: ['W = mg'],
            usesGravity: true,
            inputs: [
                { name: 'm', label: 'Mass (m)', unit: 'kg' }
            ],
            calculate: (inputs, g = 9.8) => {
                const m = parseFloat(inputs.m) || 0;
                const W = m * g;
                return {
                    result: W,
                    unit: 'N',
                    steps: [
                        `Given: m = ${m} kg, g = ${g} m/s²`,
                        `Formula: W = mg`,
                        `W = ${m} × ${g}`,
                        `W = ${W.toFixed(4)} N`
                    ]
                };
            }
        },
        acceleration: {
            name: 'Acceleration',
            formulas: ['a = F/m'],
            inputs: [
                { name: 'F', label: 'Force (F)', unit: 'N' },
                { name: 'm', label: 'Mass (m)', unit: 'kg' }
            ],
            calculate: (inputs) => {
                const F = parseFloat(inputs.F) || 0;
                const m = parseFloat(inputs.m) || 1;
                const a = F / m;
                return {
                    result: a,
                    unit: 'm/s²',
                    steps: [
                        `Given: F = ${F} N, m = ${m} kg`,
                        `Formula: a = F/m`,
                        `a = ${F}/${m}`,
                        `a = ${a.toFixed(4)} m/s²`
                    ]
                };
            }
        },
        mass: {
            name: 'Mass',
            formulas: ['m = F/a', 'm = W/g'],
            inputs: [
                { name: 'F', label: 'Force (F)', unit: 'N' },
                { name: 'a', label: 'Acceleration (a)', unit: 'm/s²' }
            ],
            calculate: (inputs) => {
                const F = parseFloat(inputs.F) || 0;
                const a = parseFloat(inputs.a) || 1;
                const m = F / a;
                return {
                    result: m,
                    unit: 'kg',
                    steps: [
                        `Given: F = ${F} N, a = ${a} m/s²`,
                        `Formula: m = F/a`,
                        `m = ${F}/${a}`,
                        `m = ${m.toFixed(4)} kg`
                    ]
                };
            }
        }
    },
dynamics_friction: {
    // General Friction (existing)
    frictionForce: {
        name: 'Frictional Force',
        formulas: ['Ff = μW', 'Ff = μmg'],
        usesGravity: true,
        inputs: [
            { name: 'mu', label: 'Coefficient of Friction (μ)', unit: '' },
            { name: 'm', label: 'Mass (m)', unit: 'kg' }
        ],
        calculate: (inputs, g = 9.8) => {
            const mu = parseFloat(inputs.mu) || 0;
            const m = parseFloat(inputs.m) || 0;
            const Ff = mu * m * g;
            return {
                result: Ff,
                unit: 'N',
                steps: [
                    `Given: μ = ${mu}, m = ${m} kg, g = ${g} m/s²`,
                    `Formula: Ff = μmg`,
                    `Ff = ${mu} × ${m} × ${g}`,
                    `Ff = ${Ff.toFixed(4)} N`
                ]
            };
        }
    },
    coefficient: {
        name: 'Coefficient of Friction',
        formulas: ['μ = Ff/W', 'μ = Ff/(mg)'],
        usesGravity: true,
        inputs: [
            { name: 'Ff', label: 'Friction Force (Ff)', unit: 'N' },
            { name: 'm', label: 'Mass (m)', unit: 'kg' }
        ],
        calculate: (inputs, g = 9.8) => {
            const Ff = parseFloat(inputs.Ff) || 0;
            const m = parseFloat(inputs.m) || 1;
            const mu = Ff / (m * g);
            return {
                result: mu,
                unit: '',
                steps: [
                    `Given: Ff = ${Ff} N, m = ${m} kg, g = ${g} m/s²`,
                    `Formula: μ = Ff/(mg)`,
                    `μ = ${Ff}/(${m} × ${g})`,
                    `μ = ${Ff}/${(m*g).toFixed(2)}`,
                    `μ = ${mu.toFixed(4)}`
                ]
            };
        }
    },
    
    // Specific Types (from images)
    staticFrictionForce: {
        name: 'Static Frictional Force',
        formulas: ['Fs = μsW'],
        usesGravity: false,
        inputs: [
            { name: 'mu_s', label: 'Coefficient of Static Friction (μs)', unit: '' },
            { name: 'W', label: 'Weight (W)', unit: 'N' }
        ],
        calculate: (inputs) => {
            const mu_s = parseFloat(inputs.mu_s) || 0;
            const W = parseFloat(inputs.W) || 0;
            const Fs = mu_s * W;
            return {
                result: Fs,
                unit: 'N',
                steps: [
                    `Given: μs = ${mu_s}, W = ${W} N`,
                    `Formula: Fs = μsW`,
                    `Fs = ${mu_s} × ${W}`,
                    `Fs = ${Fs.toFixed(4)} N`
                ]
            };
        }
    },
    coefficientStaticFriction: {
        name: 'Coefficient of Static Friction',
        formulas: ['μs = Fs/W'],
        usesGravity: false,
        inputs: [
            { name: 'Fs', label: 'Static Friction Force (Fs)', unit: 'N' },
            { name: 'W', label: 'Weight (W)', unit: 'N' }
        ],
        calculate: (inputs) => {
            const Fs = parseFloat(inputs.Fs) || 0;
            const W = parseFloat(inputs.W) || 1;
            const mu_s = Fs / W;
            return {
                result: mu_s,
                unit: '',
                steps: [
                    `Given: Fs = ${Fs} N, W = ${W} N`,
                    `Formula: μs = Fs/W`,
                    `μs = ${Fs}/${W}`,
                    `μs = ${mu_s.toFixed(4)}`
                ]
            };
        }
    },
    kineticFrictionForce: {
        name: 'Kinetic Frictional Force',
        formulas: ['Fk = μkW'],
        usesGravity: false,
        inputs: [
            { name: 'mu_k', label: 'Coefficient of Kinetic Friction (μk)', unit: '' },
            { name: 'W', label: 'Weight (W)', unit: 'N' }
        ],
        calculate: (inputs) => {
            const mu_k = parseFloat(inputs.mu_k) || 0;
            const W = parseFloat(inputs.W) || 0;
            const Fk = mu_k * W;
            return {
                result: Fk,
                unit: 'N',
                steps: [
                    `Given: μk = ${mu_k}, W = ${W} N`,
                    `Formula: Fk = μkW`,
                    `Fk = ${mu_k} × ${W}`,
                    `Fk = ${Fk.toFixed(4)} N`
                ]
            };
        }
    },
    coefficientKineticFriction: {
        name: 'Coefficient of Kinetic Friction',
        formulas: ['μk = Fk/W'],
        usesGravity: false,
        inputs: [
            { name: 'Fk', label: 'Kinetic Friction Force (Fk)', unit: 'N' },
            { name: 'W', label: 'Weight (W)', unit: 'N' }
        ],
        calculate: (inputs) => {
            const Fk = parseFloat(inputs.Fk) || 0;
            const W = parseFloat(inputs.W) || 1;
            const mu_k = Fk / W;
            return {
                result: mu_k,
                unit: '',
                steps: [
                    `Given: Fk = ${Fk} N, W = ${W} N`,
                    `Formula: μk = Fk/W`,
                    `μk = ${Fk}/${W}`,
                    `μk = ${mu_k.toFixed(4)}`
                ]
            };
        }
    },
    rollingFrictionForce: {
        name: 'Rolling Frictional Force',
        formulas: ['Fr = μrW'],
        usesGravity: false,
        inputs: [
            { name: 'mu_r', label: 'Coefficient of Rolling Friction (μr)', unit: '' },
            { name: 'W', label: 'Weight (W)', unit: 'N' }
        ],
        calculate: (inputs) => {
            const mu_r = parseFloat(inputs.mu_r) || 0;
            const W = parseFloat(inputs.W) || 0;
            const Fr = mu_r * W;
            return {
                result: Fr,
                unit: 'N',
                steps: [
                    `Given: μr = ${mu_r}, W = ${W} N`,
                    `Formula: Fr = μrW`,
                    `Fr = ${mu_r} × ${W}`,
                    `Fr = ${Fr.toFixed(4)} N`
                ]
            };
        }
    },
    coefficientRollingFriction: {
        name: 'Coefficient of Rolling Friction',
        formulas: ['μr = Fr/W'],
        usesGravity: false,
        inputs: [
            { name: 'Fr', label: 'Rolling Friction Force (Fr)', unit: 'N' },
            { name: 'W', label: 'Weight (W)', unit: 'N' }
        ],
        calculate: (inputs) => {
            const Fr = parseFloat(inputs.Fr) || 0;
            const W = parseFloat(inputs.W) || 1;
            const mu_r = Fr / W;
            return {
                result: mu_r,
                unit: '',
                steps: [
                    `Given: Fr = ${Fr} N, W = ${W} N`,
                    `Formula: μr = Fr/W`,
                    `μr = ${Fr}/${W}`,
                    `μr = ${mu_r.toFixed(4)}`
                ]
            };
        }
    }
},
    dynamics_work_energy: {
        work: {
            name: 'Work',
            formulas: ['W = Fd cosθ'],
            inputs: [
                { name: 'F', label: 'Force (F)', unit: 'N' },
                { name: 'd', label: 'Distance (d)', unit: 'm' },
                { name: 'angle', label: 'Angle (θ)', unit: '°' }
            ],
            calculate: (inputs) => {
                const F = parseFloat(inputs.F) || 0;
                const d = parseFloat(inputs.d) || 0;
                const angle = parseFloat(inputs.angle) || 0;
                const rad = angle * (Math.PI / 180);
                const W = F * d * Math.cos(rad);
                return {
                    result: W,
                    unit: 'J',
                    steps: [
                        `Given: F = ${F} N, d = ${d} m, θ = ${angle}°`,
                        `Formula: W = Fd cosθ`,
                        `W = ${F} × ${d} × cos(${angle}°)`,
                        `W = ${F * d} × ${Math.cos(rad).toFixed(4)}`,
                        `W = ${W.toFixed(4)} J`
                    ]
                };
            }
        },
        kineticEnergy: {
            name: 'Kinetic Energy',
            formulas: ['KE = ½ mv²'],
            inputs: [
                { name: 'm', label: 'Mass (m)', unit: 'kg' },
                { name: 'v', label: 'Velocity (v)', unit: 'm/s' }
            ],
            calculate: (inputs) => {
                const m = parseFloat(inputs.m) || 0;
                const v = parseFloat(inputs.v) || 0;
                const KE = 0.5 * m * v * v;
                return {
                    result: KE,
                    unit: 'J',
                    steps: [
                        `Given: m = ${m} kg, v = ${v} m/s`,
                        `Formula: KE = ½ mv²`,
                        `KE = ½ × ${m} × ${v}²`,
                        `KE = 0.5 × ${m} × ${v*v}`,
                        `KE = ${KE.toFixed(4)} J`
                    ]
                };
            }
        },
        potentialEnergy: {
            name: 'Potential Energy',
            formulas: ['PE = mgh'],
            usesGravity: true,
            inputs: [
                { name: 'm', label: 'Mass (m)', unit: 'kg' },
                { name: 'h', label: 'Height (h)', unit: 'm' }
            ],
            calculate: (inputs, g = 9.8) => {
                const m = parseFloat(inputs.m) || 0;
                const h = parseFloat(inputs.h) || 0;
                const PE = m * g * h;
                return {
                    result: PE,
                    unit: 'J',
                    steps: [
                        `Given: m = ${m} kg, h = ${h} m, g = ${g} m/s²`,
                        `Formula: PE = mgh`,
                        `PE = ${m} × ${g} × ${h}`,
                        `PE = ${PE.toFixed(4)} J`
                    ]
                };
            }
        },
        power: {
            name: 'Power',
            formulas: ['P = W/t', 'P = Fv'],
            inputs: [
                { name: 'W', label: 'Work (W)', unit: 'J' },
                { name: 't', label: 'Time (t)', unit: 's' }
            ],
            calculate: (inputs) => {
                const W = parseFloat(inputs.W) || 0;
                const t = parseFloat(inputs.t) || 1;
                const P = W / t;
                return {
                    result: P,
                    unit: 'W',
                    steps: [
                        `Given: W = ${W} J, t = ${t} s`,
                        `Formula: P = W/t`,
                        `P = ${W}/${t}`,
                        `P = ${P.toFixed(4)} W`
                    ]
                };
            }
        }
    },
    electricity: {
        current: {
            name: 'Current (Ohm\'s Law)',
            formulas: ['I = V/R', 'I = Q/t'],
            inputs: [
                { name: 'V', label: 'Voltage (V)', unit: 'V' },
                { name: 'R', label: 'Resistance (R)', unit: 'Ω' }
            ],
            calculate: (inputs) => {
                const V = parseFloat(inputs.V) || 0;
                const R = parseFloat(inputs.R) || 1;
                const I = V / R;
                return {
                    result: I,
                    unit: 'A',
                    steps: [
                        `Given: V = ${V} V, R = ${R} Ω`,
                        `Formula: I = V/R`,
                        `I = ${V}/${R}`,
                        `I = ${I.toFixed(4)} A`
                    ]
                };
            }
        },
        voltage: {
            name: 'Voltage',
            formulas: ['V = IR'],
            inputs: [
                { name: 'I', label: 'Current (I)', unit: 'A' },
                { name: 'R', label: 'Resistance (R)', unit: 'Ω' }
            ],
            calculate: (inputs) => {
                const I = parseFloat(inputs.I) || 0;
                const R = parseFloat(inputs.R) || 0;
                const V = I * R;
                return {
                    result: V,
                    unit: 'V',
                    steps: [
                        `Given: I = ${I} A, R = ${R} Ω`,
                        `Formula: V = IR`,
                        `V = ${I} × ${R}`,
                        `V = ${V.toFixed(4)} V`
                    ]
                };
            }
        },
        resistance: {
            name: 'Resistance',
            formulas: ['R = V/I'],
            inputs: [
                { name: 'V', label: 'Voltage (V)', unit: 'V' },
                { name: 'I', label: 'Current (I)', unit: 'A' }
            ],
            calculate: (inputs) => {
                const V = parseFloat(inputs.V) || 0;
                const I = parseFloat(inputs.I) || 1;
                const R = V / I;
                return {
                    result: R,
                    unit: 'Ω',
                    steps: [
                        `Given: V = ${V} V, I = ${I} A`,
                        `Formula: R = V/I`,
                        `R = ${V}/${I}`,
                        `R = ${R.toFixed(4)} Ω`
                    ]
                };
            }
        },
        electricPower: {
            name: 'Electric Power',
            formulas: ['P = IV', 'P = I²R', 'P = V²/R'],
            inputs: [
                { name: 'I', label: 'Current (I)', unit: 'A' },
                { name: 'V', label: 'Voltage (V)', unit: 'V' }
            ],
            calculate: (inputs) => {
                const I = parseFloat(inputs.I) || 0;
                const V = parseFloat(inputs.V) || 0;
                const P = I * V;
                return {
                    result: P,
                    unit: 'W',
                    steps: [
                        `Given: I = ${I} A, V = ${V} V`,
                        `Formula: P = IV`,
                        `P = ${I} × ${V}`,
                        `P = ${P.toFixed(4)} W`
                    ]
                };
            }
        },
        energyCost: {
            name: 'Energy Cost',
            formulas: ['Cost = Energy × Cost per kWh', 'Energy = Power × Time'],
            inputs: [
                { name: 'P', label: 'Power (P)', unit: 'W' },
                { name: 't', label: 'Time (t)', unit: 'hours' },
                { name: 'rate', label: 'Cost per kWh', unit: '₱' }
            ],
            calculate: (inputs) => {
                const P = parseFloat(inputs.P) || 0;
                const t = parseFloat(inputs.t) || 0;
                const rate = parseFloat(inputs.rate) || 0;
                const energyKWh = (P * t) / 1000;
                const cost = energyKWh * rate;
                return {
                    result: cost,
                    unit: '₱',
                    steps: [
                        `Given: P = ${P} W, t = ${t} hours, rate = ₱${rate}/kWh`,
                        `Energy (kWh) = (P × t)/1000`,
                        `Energy = (${P} × ${t})/1000 = ${energyKWh.toFixed(4)} kWh`,
                        `Cost = Energy × Rate`,
                        `Cost = ${energyKWh.toFixed(4)} × ${rate}`,
                        `Cost = ₱${cost.toFixed(2)}`
                    ]
                };
            }
        },
charge: {
            name: 'Electric Charge',
            formulas: ['Q = It'],
            inputs: [
                { name: 'I', label: 'Current (I)', unit: 'A' },
                { name: 't', label: 'Time (t)', unit: 's' }
            ],
            calculate: (inputs) => {
                const I = parseFloat(inputs.I) || 0;
                const t = parseFloat(inputs.t) || 0;
                const Q = I * t;
                return {
                    result: Q,
                    unit: 'C',
                    steps: [
                        `Given: I = ${I} A, t = ${t} s`,
                        `Formula: Q = It`,
                        `Q = ${I} × ${t}`,
                        `Q = ${Q.toFixed(4)} C`
                    ]
                };
            }
        },
        wireResistance: {
            name: 'Wire Resistance',
            formulas: ['R = ρ(l/A)'],
            inputs: [
                { name: 'rho', label: 'Resistivity (ρ)', unit: 'cmil-Ω/ft' },
                { name: 'l', label: 'Length (l)', unit: 'ft' },
                { name: 'A', label: 'Cross-sectional Area (A)', unit: 'cmil' }
            ],
            calculate: (inputs) => {
                const rho = parseFloat(inputs.rho) || 0;
                const l = parseFloat(inputs.l) || 0;
                const A = parseFloat(inputs.A) || 1;
                const R = rho * (l / A);
                return {
                    result: R,
                    unit: 'Ω',
                    steps: [
                        `Given: ρ = ${rho} cmil-Ω/ft, l = ${l} ft, A = ${A} cmil`,
                        `Formula: R = ρ(l/A)`,
                        `R = ${rho} × (${l}/${A})`,
                        `R = ${rho} × ${(l/A).toFixed(6)}`,
                        `R = ${R.toFixed(4)} Ω`
                    ]
                };
            }
        }
    },


    magnetism: {
        fluxDensity: {
            name: 'Magnetic Flux Density',
            formulas: ['B = φ/A'],
            inputs: [
                { name: 'phi', label: 'Magnetic Flux (φ)', unit: 'Wb' },
                { name: 'A', label: 'Area (A)', unit: 'm²' }
            ],
            calculate: (inputs) => {
                const phi = parseFloat(inputs.phi) || 0;
                const A = parseFloat(inputs.A) || 1;
                const B = phi / A;
                return {
                    result: B,
                    unit: 'T',
                    steps: [
                        `Given: φ = ${phi} Wb, A = ${A} m²`,
                        `Formula: B = φ/A`,
                        `B = ${phi}/${A}`,
                        `B = ${B.toFixed(4)} T`
                    ]
                };
            }
        },
        magneticFlux: {
            name: 'Magnetic Flux',
            formulas: ['φ = BA'],
            inputs: [
                { name: 'B', label: 'Flux Density (B)', unit: 'T' },
                { name: 'A', label: 'Area (A)', unit: 'm²' }
            ],
            calculate: (inputs) => {
                const B = parseFloat(inputs.B) || 0;
                const A = parseFloat(inputs.A) || 0;
                const phi = B * A;
                return {
                    result: phi,
                    unit: 'Wb',
                    steps: [
                        `Given: B = ${B} T, A = ${A} m²`,
                        `Formula: φ = BA`,
                        `φ = ${B} × ${A}`,
                        `φ = ${phi.toFixed(4)} Wb`
                    ]
                };
            }
        }
    },
waves_sound: {
        frequency: {
            name: 'Frequency',
            formulas: ['f = 1/T'],
            inputs: [
                { name: 'T', label: 'Period (T)', unit: 's' }
            ],
            calculate: (inputs) => {
                const T = parseFloat(inputs.T) || 1;
                const f = 1 / T;
                return {
                    result: f,
                    unit: 'Hz',
                    steps: [
                        `Given: T = ${T} s`,
                        `Formula: f = 1/T`,
                        `f = 1/${T}`,
                        `f = ${f.toFixed(4)} Hz`
                    ]
                };
            }
        },
        period: {
            name: 'Period',
            formulas: ['T = 1/f'],
            inputs: [
                { name: 'f', label: 'Frequency (f)', unit: 'Hz' }
            ],
            calculate: (inputs) => {
                const f = parseFloat(inputs.f) || 1;
                const T = 1 / f;
                return {
                    result: T,
                    unit: 's',
                    steps: [
                        `Given: f = ${f} Hz`,
                        `Formula: T = 1/f`,
                        `T = 1/${f}`,
                        `T = ${T.toFixed(4)} s`
                    ]
                };
            }
        },
        waveSpeed: {
            name: 'Wave Speed',
            formulas: ['v = fλ'],
            inputs: [
                { name: 'f', label: 'Frequency (f)', unit: 'Hz' },
                { name: 'lambda', label: 'Wavelength (λ)', unit: 'm' }
            ],
            calculate: (inputs) => {
                const f = parseFloat(inputs.f) || 0;
                const lambda = parseFloat(inputs.lambda) || 0;
                const v = f * lambda;
                return {
                    result: v,
                    unit: 'm/s',
                    steps: [
                        `Given: f = ${f} Hz, λ = ${lambda} m`,
                        `Formula: v = fλ`,
                        `v = ${f} × ${lambda}`,
                        `v = ${v.toFixed(4)} m/s`
                    ]
                };
            }
        },
        wavelength: {
            name: 'Wavelength',
            formulas: ['λ = v/f'],
            inputs: [
                { name: 'v', label: 'Wave Speed (v)', unit: 'm/s' },
                { name: 'f', label: 'Frequency (f)', unit: 'Hz' }
            ],
            calculate: (inputs) => {
                const v = parseFloat(inputs.v) || 0;
                const f = parseFloat(inputs.f) || 1;
                const lambda = v / f;
                return {
                    result: lambda,
                    unit: 'm',
                    steps: [
                        `Given: v = ${v} m/s, f = ${f} Hz`,
                        `Formula: λ = v/f`,
                        `λ = ${v}/${f}`,
                        `λ = ${lambda.toFixed(4)} m`
                    ]
                };
            }
        },
        dopplerShift: {
            name: 'Doppler Shift Equation',
            formulas: ['F = fs(1 + v/c)/(1 - v/c)'],
            inputs: [
                { name: 'fs', label: 'Source Frequency (fs)', unit: 'Hz' },
                { name: 'v', label: 'Relative Velocity (v)', unit: 'm/s' },
                { name: 'c', label: 'Wave Speed (c)', unit: 'm/s' }
            ],
            calculate: (inputs) => {
                const fs = parseFloat(inputs.fs) || 0;
                const v = parseFloat(inputs.v) || 0;
                const c = parseFloat(inputs.c) || 1;
                const F = fs * (1 + v/c) / (1 - v/c);
                return {
                    result: F,
                    unit: 'Hz',
                    steps: [
                        `Given: fs = ${fs} Hz, v = ${v} m/s, c = ${c} m/s`,
                        `Formula: F = fs(1 + v/c)/(1 - v/c)`,
                        `F = ${fs} × (1 + ${v}/${c})/(1 - ${v}/${c})`,
                        `F = ${fs} × ${(1 + v/c).toFixed(4)}/${(1 - v/c).toFixed(4)}`,
                        `F = ${F.toFixed(4)} Hz`
                    ]
                };
            }
        }
    },
    
    waves_light: {
        lensEquation: {
            name: 'Lens Equation',
            formulas: ['1/f = 1/di + 1/do'],
            inputs: [
                { name: 'di', label: 'Image Distance (di)', unit: 'cm' },
                { name: 'do', label: 'Object Distance (do)', unit: 'cm' }
            ],
            calculate: (inputs) => {
                const di = parseFloat(inputs.di) || 1;
                const do_val = parseFloat(inputs.do) || 1;
                const f = 1 / (1/di + 1/do_val);
                return {
                    result: f,
                    unit: 'cm',
                    steps: [
                        `Given: di = ${di} cm, do = ${do_val} cm`,
                        `Formula: 1/f = 1/di + 1/do`,
                        `1/f = 1/${di} + 1/${do_val}`,
                        `1/f = ${(1/di).toFixed(4)} + ${(1/do_val).toFixed(4)}`,
                        `1/f = ${(1/di + 1/do_val).toFixed(4)}`,
                        `f = ${f.toFixed(4)} cm`
                    ]
                };
            }
        },
        focalLengthFromImageDistance: {
            name: 'Focal Length (from Image Distance)',
            formulas: ['f = (di × do)/(di + do)'],
            inputs: [
                { name: 'di', label: 'Image Distance (di)', unit: 'cm' },
                { name: 'do', label: 'Object Distance (do)', unit: 'cm' }
            ],
            calculate: (inputs) => {
                const di = parseFloat(inputs.di) || 1;
                const do_val = parseFloat(inputs.do) || 1;
                const f = (di * do_val) / (di + do_val);
                return {
                    result: f,
                    unit: 'cm',
                    steps: [
                        `Given: di = ${di} cm, do = ${do_val} cm`,
                        `Formula: f = (di × do)/(di + do)`,
                        `f = (${di} × ${do_val})/(${di} + ${do_val})`,
                        `f = ${(di * do_val).toFixed(2)}/${(di + do_val).toFixed(2)}`,
                        `f = ${f.toFixed(4)} cm`
                    ]
                };
            }
        },
        imageDistance: {
            name: 'Image Distance',
            formulas: ['di = (f × do)/(do - f)'],
            inputs: [
                { name: 'f', label: 'Focal Length (f)', unit: 'cm' },
                { name: 'do', label: 'Object Distance (do)', unit: 'cm' }
            ],
            calculate: (inputs) => {
                const f = parseFloat(inputs.f) || 1;
                const do_val = parseFloat(inputs.do) || 1;
                const di = (f * do_val) / (do_val - f);
                return {
                    result: di,
                    unit: 'cm',
                    steps: [
                        `Given: f = ${f} cm, do = ${do_val} cm`,
                        `Formula: di = (f × do)/(do - f)`,
                        `di = (${f} × ${do_val})/(${do_val} - ${f})`,
                        `di = ${(f * do_val).toFixed(2)}/${(do_val - f).toFixed(2)}`,
                        `di = ${di.toFixed(4)} cm`
                    ]
                };
            }
        },
        objectDistance: {
            name: 'Object Distance',
            formulas: ['do = (f × di)/(di - f)'],
            inputs: [
                { name: 'f', label: 'Focal Length (f)', unit: 'cm' },
                { name: 'di', label: 'Image Distance (di)', unit: 'cm' }
            ],
            calculate: (inputs) => {
                const f = parseFloat(inputs.f) || 1;
                const di = parseFloat(inputs.di) || 1;
                const do_val = (f * di) / (di - f);
                return {
                    result: do_val,
                    unit: 'cm',
                    steps: [
                        `Given: f = ${f} cm, di = ${di} cm`,
                        `Formula: do = (f × di)/(di - f)`,
                        `do = (${f} × ${di})/(${di} - ${f})`,
                        `do = ${(f * di).toFixed(2)}/${(di - f).toFixed(2)}`,
                        `do = ${do_val.toFixed(4)} cm`
                    ]
                };
            }
        },
        magnification: {
            name: 'Magnification',
            formulas: ['m = hi/ho = -di/do'],
            inputs: [
                { name: 'hi', label: 'Image Height (hi)', unit: 'cm' },
                { name: 'ho', label: 'Object Height (ho)', unit: 'cm' }
            ],
            calculate: (inputs) => {
                const hi = parseFloat(inputs.hi) || 0;
                const ho = parseFloat(inputs.ho) || 1;
                const m = hi / ho;
                return {
                    result: m,
                    unit: '',
                    steps: [
                        `Given: hi = ${hi} cm, ho = ${ho} cm`,
                        `Formula: m = hi/ho`,
                        `m = ${hi}/${ho}`,
                        `m = ${m.toFixed(4)}`
                    ]
                };
            }
        },
        magnificationFromDistances: {
            name: 'Magnification (from Distances)',
            formulas: ['m = -di/do'],
            inputs: [
                { name: 'di', label: 'Image Distance (di)', unit: 'cm' },
                { name: 'do', label: 'Object Distance (do)', unit: 'cm' }
            ],
            calculate: (inputs) => {
                const di = parseFloat(inputs.di) || 0;
                const do_val = parseFloat(inputs.do) || 1;
                const m = -di / do_val;
                return {
                    result: m,
                    unit: '',
                    steps: [
                        `Given: di = ${di} cm, do = ${do_val} cm`,
                        `Formula: m = -di/do`,
                        `m = -${di}/${do_val}`,
                        `m = ${m.toFixed(4)}`
                    ]
                };
            }
        },
        imageHeight: {
            name: 'Image Height',
            formulas: ['hi = m × ho', 'hi = -(di/do) × ho'],
            inputs: [
                { name: 'm', label: 'Magnification (m)', unit: '' },
                { name: 'ho', label: 'Object Height (ho)', unit: 'cm' }
            ],
            calculate: (inputs) => {
                const m = parseFloat(inputs.m) || 0;
                const ho = parseFloat(inputs.ho) || 0;
                const hi = m * ho;
                return {
                    result: hi,
                    unit: 'cm',
                    steps: [
                        `Given: m = ${m}, ho = ${ho} cm`,
                        `Formula: hi = m × ho`,
                        `hi = ${m} × ${ho}`,
                        `hi = ${hi.toFixed(4)} cm`
                    ]
                };
            }
        },
        objectHeight: {
            name: 'Object Height',
            formulas: ['ho = hi/m', 'ho = -(do/di) × hi'],
            inputs: [
                { name: 'hi', label: 'Image Height (hi)', unit: 'cm' },
                { name: 'm', label: 'Magnification (m)', unit: '' }
            ],
            calculate: (inputs) => {
                const hi = parseFloat(inputs.hi) || 0;
                const m = parseFloat(inputs.m) || 1;
                const ho = hi / m;
                return {
                    result: ho,
                    unit: 'cm',
                    steps: [
                        `Given: hi = ${hi} cm, m = ${m}`,
                        `Formula: ho = hi/m`,
                        `ho = ${hi}/${m}`,
                        `ho = ${ho.toFixed(4)} cm`
                    ]
                };
            }
        }
    }
};

// Category display names
const categoryNames = {
    vector: 'Vector Arithmetic',
    kinematics_horizontal: 'Kinematics (Horizontal)',
    kinematics_vertical: 'Kinematics (Vertical)',
    kinematics_projectile: 'Kinematics (Projectile)',
    dynamics_forces: 'Dynamics (Forces & Motion)',
    dynamics_friction: 'Dynamics (Friction)',
    dynamics_work_energy: 'Work, Energy & Power',
    electricity: 'Electricity',
    magnetism: 'Magnetism',
    waves_sound: 'Waves (Sound)',
    waves_light: 'Waves (Light & Optics)'
};