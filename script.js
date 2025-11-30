// ===========================
// GLOBAL STATE
// ===========================
let currentTheme = 'light';
let currentTab = 'calculator';
let currentCategory = 'vector';
let currentTopic = 'magnitude';
let calcExpression = '0';
let currentGravity = 9.8;
let selectedGravityPlanet = 'earth';


// ===========================
// INITIALIZATION
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    initializeTabs();
    initializeThemeToggle();
    initializeCalculator();
    initializePhysicsSolver();
    initializeConverter();
    initializeAITutor();
});

// ===========================
// TAB MANAGEMENT
// ===========================
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabName = btn.dataset.tab;
            switchTab(tabName);
        });
    });
}

function switchTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(tabName).classList.add('active');
    
    currentTab = tabName;
}

// ===========================
// THEME TOGGLE
// ===========================
function initializeThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    
    themeToggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.body.setAttribute('data-theme', currentTheme);
        
        const sunIcon = themeToggle.querySelector('.sun-icon');
        const moonIcon = themeToggle.querySelector('.moon-icon');
        
        if (currentTheme === 'dark') {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'inline';
        } else {
            sunIcon.style.display = 'inline';
            moonIcon.style.display = 'none';
        }
    });
}

// ===========================
// CALCULATOR - FIXED
// ===========================
function initializeCalculator() {
    const buttons = document.querySelectorAll('.calc-btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const action = btn.dataset.action;
            handleCalculatorInput(action);
        });
    });
}

function handleCalculatorInput(action) {
    const calcExpressionEl = document.getElementById('calcExpression');
    const calcResultEl = document.getElementById('calcResult');
    
    switch(action) {
        case 'clear':
            calcExpression = '0';
            calcResultEl.textContent = '';
            break;
            
        case 'backspace':
            calcExpression = calcExpression.slice(0, -1);
            if (calcExpression === '') {
                calcExpression = '0';
            }
            break;
            
        case '=':
            try {
                if (calcExpression && calcExpression !== '0') {
                    const result = evaluateExpression(calcExpression);
                    calcResultEl.textContent = calcExpression;
                    calcExpression = result.toString();
                }
            } catch(e) {
                calcExpression = 'Error';
            }
            break;
            
        default:
            if (calcExpression === '0' && action !== '.') {
                calcExpression = action;
            } else if (calcExpression === '0' && action === '.') {
                calcExpression = '0.';
            } else {
                calcExpression += action;
            }
    }
    
    calcExpressionEl.textContent = calcExpression;
    if (action !== '=') {
        calcResultEl.textContent = '';
    }
}

function evaluateExpression(expr) {
    // Save original for error reporting
    const original = expr;
    
    try {
        // Replace constants
        expr = expr.replace(/π/g, '(' + Math.PI + ')');
        expr = expr.replace(/e(?![0-9])/g, '(' + Math.E + ')');
        
        // Replace operators
        expr = expr.replace(/×/g, '*');
        expr = expr.replace(/÷/g, '/');
        expr = expr.replace(/−/g, '-');
        
        // Handle functions with proper precedence
        // sqrt
        expr = expr.replace(/sqrt\(([^()]+|\([^()]*\))+\)/g, (match, content) => {
            const value = evaluateExpression(content);
            return Math.sqrt(value);
        });
        
        // Trig functions (degrees to radians)
        expr = expr.replace(/sin\(([^()]+|\([^()]*\))+\)/g, (match, content) => {
            const value = evaluateExpression(content);
            return Math.sin(value * Math.PI / 180);
        });
        expr = expr.replace(/cos\(([^()]+|\([^()]*\))+\)/g, (match, content) => {
            const value = evaluateExpression(content);
            return Math.cos(value * Math.PI / 180);
        });
        expr = expr.replace(/tan\(([^()]+|\([^()]*\))+\)/g, (match, content) => {
            const value = evaluateExpression(content);
            return Math.tan(value * Math.PI / 180);
        });
        
        // Logarithms
        expr = expr.replace(/log2\(([^()]+|\([^()]*\))+\)/g, (match, content) => {
            const value = evaluateExpression(content);
            return Math.log2(value);
        });
        expr = expr.replace(/log10\(([^()]+|\([^()]*\))+\)/g, (match, content) => {
            const value = evaluateExpression(content);
            return Math.log10(value);
        });
        expr = expr.replace(/ln\(([^()]+|\([^()]*\))+\)/g, (match, content) => {
            const value = evaluateExpression(content);
            return Math.log(value);
        });
        
        // Factorial
        expr = expr.replace(/(\d+(\.\d+)?)!/g, (match, num) => {
            return factorial(parseFloat(num));
        });
        
        // Power (use ** for proper precedence)
        expr = expr.replace(/\^/g, '**');
        
        // Percentage
        expr = expr.replace(/(\d+(\.\d+)?)%/g, (match, num) => {
            return parseFloat(num) / 100;
        });
        
        // Evaluate
        const result = Function('"use strict"; return (' + expr + ')')();
        
        if (!isFinite(result)) {
            throw new Error('Invalid result');
        }
        
        return typeof result === 'number' ? parseFloat(result.toFixed(10)) : result;
    } catch (e) {
        throw new Error('Syntax Error');
    }
}

function factorial(n) {
    if (n < 0 || n !== Math.floor(n)) return NaN;
    if (n === 0 || n === 1) return 1;
    if (n > 170) return Infinity;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// ===========================
// PHYSICS SOLVER
// ===========================
function initializePhysicsSolver() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            selectCategory(category);
        });
    });
    
    selectCategory('vector');
}

function selectCategory(category) {
    currentCategory = category;
    
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
    
    displayTopics(category);
}

function displayTopics(category) {
    const topicSelector = document.getElementById('topicSelector');
    const topics = physicsFormulas[category];
    
    topicSelector.innerHTML = '';
    
    Object.keys(topics).forEach((topicKey, index) => {
        const topic = topics[topicKey];
        const btn = document.createElement('button');
        btn.className = 'topic-btn' + (index === 0 ? ' active' : '');
        btn.textContent = topic.name;
        btn.dataset.topic = topicKey;
        
        btn.addEventListener('click', () => {
            selectTopic(topicKey);
        });
        
        topicSelector.appendChild(btn);
    });
    
    const firstTopic = Object.keys(topics)[0];
    selectTopic(firstTopic);
}

function selectTopic(topicKey) {
    currentTopic = topicKey;
    
    document.querySelectorAll('.topic-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-topic="${topicKey}"]`).classList.add('active');
    
    displayPhysicsCalculator(currentCategory, topicKey);
}

function displayPhysicsCalculator(category, topicKey) {
    const topic = physicsFormulas[category][topicKey];
    
    document.getElementById('topicTitle').textContent = topic.name;
    
    const formulasEl = document.getElementById('formulas');
    formulasEl.innerHTML = '';
    topic.formulas.forEach(formula => {
        const div = document.createElement('div');
        div.className = 'formula-item';
        div.textContent = formula;
        formulasEl.appendChild(div);
    });
    
    const inputsEl = document.getElementById('physicsInputs');
    inputsEl.innerHTML = '';
    topic.inputs.forEach(input => {
        const group = document.createElement('div');
        group.className = 'input-group';
        
        const label = document.createElement('label');
        label.textContent = `${input.label} ${input.unit ? '(' + input.unit + ')' : ''}`;
        
        const inputField = document.createElement('input');
        inputField.type = 'number';
        inputField.step = 'any';
        inputField.name = input.name;
        inputField.placeholder = `Enter ${input.label.toLowerCase()}`;
        
        group.appendChild(label);
        group.appendChild(inputField);
        inputsEl.appendChild(group);
    });
    
    if (topic.usesGravity) {
        const gravityGroup = document.createElement('div');
        gravityGroup.className = 'gravity-input-group';
        
        const gravityLabel = document.createElement('label');
        gravityLabel.textContent = 'Gravity (g)';
        
        const gravitySelect = document.createElement('select');
        gravitySelect.className = 'gravity-select';
        gravitySelect.id = 'gravitySelect';
        
        const planets = [
            { name: 'Earth', value: 'earth', g: 9.8 },
            { name: 'Moon', value: 'moon', g: 1.62 },
            { name: 'Mars', value: 'mars', g: 3.71 },
            { name: 'Jupiter', value: 'jupiter', g: 24.79 },
            { name: 'Venus', value: 'venus', g: 8.87 },
            { name: 'Saturn', value: 'saturn', g: 10.44 },
            { name: 'Mercury', value: 'mercury', g: 3.7 },
            { name: 'Uranus', value: 'uranus', g: 8.69 },
            { name: 'Neptune', value: 'neptune', g: 11.15 },
            { name: 'Custom', value: 'custom', g: 0 }
        ];
        
        planets.forEach(planet => {
            const option = document.createElement('option');
            option.value = planet.value;
            option.textContent = `${planet.name} (${planet.g} m/s²)`;
            if (planet.value === selectedGravityPlanet) {
                option.selected = true;
            }
            gravitySelect.appendChild(option);
        });
        
        const customInput = document.createElement('input');
        customInput.type = 'number';
        customInput.step = 'any';
        customInput.className = 'gravity-custom';
        customInput.id = 'gravityCustom';
        customInput.placeholder = 'Enter custom gravity (m/s²)';
        customInput.value = currentGravity;
        
        if (selectedGravityPlanet === 'custom') {
            customInput.classList.add('active');
        }
        
        gravitySelect.addEventListener('change', (e) => {
            selectedGravityPlanet = e.target.value;
            if (e.target.value === 'custom') {
                customInput.classList.add('active');
                currentGravity = parseFloat(customInput.value) || 9.8;
            } else {
                customInput.classList.remove('active');
                currentGravity = gravityValues[e.target.value];
            }
        });
        
        customInput.addEventListener('input', (e) => {
            currentGravity = parseFloat(e.target.value) || 9.8;
        });
        
        gravityGroup.appendChild(gravityLabel);
        gravityGroup.appendChild(gravitySelect);
        gravityGroup.appendChild(customInput);
        inputsEl.appendChild(gravityGroup);
    }
    
    const calculateBtn = document.getElementById('calculateBtn');
    calculateBtn.style.display = 'block';
    
    document.getElementById('physicsResult').style.display = 'none';
    
    calculateBtn.onclick = () => calculatePhysics(category, topicKey);
}

function calculatePhysics(category, topicKey) {
    const topic = physicsFormulas[category][topicKey];
    const inputs = {};
    
    const inputFields = document.querySelectorAll('#physicsInputs input:not(.gravity-custom)');
    inputFields.forEach(field => {
        if (field.name) {
            inputs[field.name] = field.value;
        }
    });
    
    const result = topic.usesGravity ? topic.calculate(inputs, currentGravity) : topic.calculate(inputs);
    
    const resultEl = document.getElementById('physicsResult');
    const resultValueEl = document.getElementById('resultValue');
    const solutionStepsEl = document.getElementById('solutionSteps');
    
    resultValueEl.textContent = `${result.result} ${result.unit || ''}`;
    
    solutionStepsEl.innerHTML = '';
    result.steps.forEach(step => {
        const div = document.createElement('div');
        div.className = 'step';
        div.textContent = step;
        solutionStepsEl.appendChild(div);
    });
    
    resultEl.style.display = 'block';
}

// ===========================
// UNIT CONVERTER - FIXED
// ===========================
function initializeConverter() {
    const categorySelect = document.getElementById('convCategory');
    const valueInput = document.getElementById('convValue');
    const convertBtn = document.getElementById('convertBtn');
    const showFactorsBtn = document.getElementById('showFactorsBtn');
    
    updateConversionUnits('length');
    
    categorySelect.addEventListener('change', (e) => {
        updateConversionUnits(e.target.value);
        document.getElementById('convResult').value = '';
    });
    
    // Only convert on button click
    convertBtn.addEventListener('click', performConversion);
    
    // Clear result when inputs change
    valueInput.addEventListener('input', () => {
        document.getElementById('convResult').value = '';
    });
    document.getElementById('convFrom').addEventListener('change', () => {
        document.getElementById('convResult').value = '';
    });
    document.getElementById('convTo').addEventListener('change', () => {
        document.getElementById('convResult').value = '';
    });
    
    showFactorsBtn.addEventListener('click', toggleConversionFactors);
}

function updateConversionUnits(category) {
    const fromSelect = document.getElementById('convFrom');
    const toSelect = document.getElementById('convTo');
    const data = conversionData[category];
    
    fromSelect.innerHTML = '';
    toSelect.innerHTML = '';
    
    data.units.forEach(unit => {
        const option1 = document.createElement('option');
        option1.value = unit;
        option1.textContent = unit;
        fromSelect.appendChild(option1);
        
        const option2 = document.createElement('option');
        option2.value = unit;
        option2.textContent = unit;
        toSelect.appendChild(option2);
    });
    
    if (data.units.length > 1) {
        toSelect.selectedIndex = 1;
    }
}

function performConversion() {
    const category = document.getElementById('convCategory').value;
    const fromUnit = document.getElementById('convFrom').value;
    const toUnit = document.getElementById('convTo').value;
    const value = parseFloat(document.getElementById('convValue').value);
    const resultEl = document.getElementById('convResult');
    
    if (isNaN(value)) {
        resultEl.value = 'Please enter a value';
        return;
    }
    
    const data = conversionData[category];
    
    if (data.special && category === 'temperature') {
        const result = convertTemperature(value, fromUnit, toUnit);
        resultEl.value = result.toFixed(4);
    } else {
        const fromFactor = data.factors[fromUnit];
        const toFactor = data.factors[toUnit];
        const result = (value * fromFactor) / toFactor;
        resultEl.value = result.toFixed(8).replace(/\.?0+$/, '');
    }
}

function convertTemperature(value, from, to) {
    let celsius;
    
    // Convert to Celsius first
    if (from === 'Celsius (°C)') {
        celsius = value;
    } else if (from === 'Fahrenheit (°F)') {
        celsius = (value - 32) * 5/9;
    } else if (from === 'Kelvin (K)') {
        celsius = value - 273.15;
    }
    
    // Convert from Celsius to target unit
    if (to === 'Celsius (°C)') {
        return celsius;
    } else if (to === 'Fahrenheit (°F)') {
        return celsius * 9/5 + 32;
    } else if (to === 'Kelvin (K)') {
        return celsius + 273.15;
    }
}

function toggleConversionFactors() {
    const factorsEl = document.getElementById('conversionFactors');
    const showFactorsBtn = document.getElementById('showFactorsBtn');
    const category = document.getElementById('convCategory').value;
    const data = conversionData[category];
    
    if (factorsEl.style.display === 'none' || !factorsEl.style.display) {
        const contentEl = document.getElementById('factorsContent');
        contentEl.innerHTML = '';
        
        if (data.special && category === 'temperature') {
            contentEl.innerHTML = `
                <div class="factor-item">Celsius to Fahrenheit: °F = °C × 9/5 + 32</div>
                <div class="factor-item">Fahrenheit to Celsius: °C = (°F - 32) × 5/9</div>
                <div class="factor-item">Celsius to Kelvin: K = °C + 273.15</div>
                <div class="factor-item">Kelvin to Celsius: °C = K - 273.15</div>
            `;
        } else {
            Object.keys(data.factors).forEach(unit => {
                const div = document.createElement('div');
                div.className = 'factor-item';
                div.textContent = `1 ${unit} = ${data.factors[unit]} base units`;
                contentEl.appendChild(div);
            });
        }
        
        factorsEl.style.display = 'block';
        showFactorsBtn.textContent = 'Hide Conversion Factors';
    } else {
        factorsEl.style.display = 'none';
        showFactorsBtn.textContent = 'Show Conversion Factors';
    }
}

// ===========================
// AI TUTOR - FIXED
// ===========================
function initializeAITutor() {
    const chatInput = document.getElementById('chatInput');
    const sendBtn = document.getElementById('sendBtn');
    const suggestionBtns = document.querySelectorAll('.suggestion-btn');
    
    addChatMessage('assistant', 'Hello! I\'m your AI Physics Chatbot powered by Google Gemini. Ask me anything about physics, formulas, or problem-solving!');
    
    sendBtn.addEventListener('click', sendMessage);
    
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
    
    suggestionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const question = btn.dataset.question;
            chatInput.value = question;
            sendMessage();
        });
    });
}

function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value.trim();
    
    if (!message) return;
    
    addChatMessage('user', message);
    chatInput.value = '';
    
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message assistant typing-indicator';
    typingDiv.innerHTML = '<div class="message-content">🤔 Thinking...</div>';
    typingDiv.id = 'typing';
    document.getElementById('chatMessages').appendChild(typingDiv);
    
    document.getElementById('chatMessages').scrollTop = document.getElementById('chatMessages').scrollHeight;
    
    callGemini(message).then(response => {
        const typing = document.getElementById('typing');
        if (typing) typing.remove();
        
        if (response) {
            addChatMessage('assistant', response);
        } else {
            addChatMessage('assistant', '❌ Sorry, I encountered an error. Please try again.');
        }
    });
}

async function callGemini(message) {
    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message })
        });
        
        if (!response.ok) {
            console.error('API Error:', response.status);
            return null;
        }
        
        const data = await response.json();
        
        if (data.candidates && data.candidates.length > 0) {
            const candidate = data.candidates[0];
            
            if (candidate.content && candidate.content.parts && candidate.content.parts.length > 0) {
                let responseText = candidate.content.parts[0].text;
                
                if (candidate.finishReason === 'MAX_TOKENS') {
                    responseText += '\n\n⚠️ (Response may be incomplete due to length limit)';
                }
                
                return responseText;
            }
        }
        
        return null;
    } catch (error) {
        console.error('Gemini API Error:', error);
        return null;
    }
}async function callGemini(message) {
    try {
        const response = await fetch('api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message })
        });
        
        if (!response.ok) {
            console.error('API Error:', response.status);
            return null;
        }
        
        const data = await response.json();
        
        if (data.candidates && data.candidates.length > 0) {
            const candidate = data.candidates[0];
            
            if (candidate.content && candidate.content.parts && candidate.content.parts.length > 0) {
                let responseText = candidate.content.parts[0].text;
                
                if (candidate.finishReason === 'MAX_TOKENS') {
                    responseText += '\n\n⚠️ (Response may be incomplete due to length limit)';
                }
                
                return responseText;
            }
        }
        
        return null;
    } catch (error) {
        console.error('Gemini API Error:', error);
        return null;
    }
}

function addChatMessage(role, content) {
    const chatMessages = document.getElementById('chatMessages');
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${role}`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    
    if (role === 'assistant') {
        let formattedContent = content
            .replace(/###\s+(.+)/g, '<h4>$1</h4>')
            .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
            .replace(/^\*\s+(.+)$/gm, '<li>$1</li>')
            .replace(/\n\n/g, '<br><br>')
            .replace(/\n/g, '<br>')
            .replace(/^---$/gm, '<hr>');
        
        formattedContent = formattedContent.replace(/(<li>.*?<\/li>)(?:\s*<br>)*(<li>.*?<\/li>)/gs, function(match) {
            const items = match.match(/<li>.*?<\/li>/g);
            if (items) {
                return '<ul>' + items.join('') + '</ul>';
            }
            return match;
        });
        
        contentDiv.innerHTML = formattedContent;
        
        // Render math with KaTeX
        if (window.renderMathInElement) {
            renderMathInElement(contentDiv, {
                delimiters: [
                    {left: '$$', right: '$$', display: true},
                    {left: '$', right: '$', display: false}
                ],
                throwOnError: false
            });
        }
        
    } else {
        contentDiv.textContent = content;
    }
    
    messageDiv.appendChild(contentDiv);
    chatMessages.appendChild(messageDiv);
    
    chatMessages.scrollTop = chatMessages.scrollHeight;
}function addChatMessage(role, content) {
    const chatMessages = document.getElementById('chatMessages');
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${role}`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    
    if (role === 'assistant') {
        let formattedContent = content
            .replace(/###\s+(.+)/g, '<h4>$1</h4>')
            .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
            .replace(/^\*\s+(.+)$/gm, '<li>$1</li>')
            .replace(/\n\n/g, '<br><br>')
            .replace(/\n/g, '<br>')
            .replace(/^---$/gm, '<hr>');
        
        formattedContent = formattedContent.replace(/(<li>.*?<\/li>)(?:\s*<br>)*(<li>.*?<\/li>)/gs, function(match) {
            const items = match.match(/<li>.*?<\/li>/g);
            if (items) {
                return '<ul>' + items.join('') + '</ul>';
            }
            return match;
        });
        
        contentDiv.innerHTML = formattedContent;
        
        // Render math with KaTeX
        if (window.renderMathInElement) {
            renderMathInElement(contentDiv, {
                delimiters: [
                    {left: '$$', right: '$$', display: true},
                    {left: '$', right: '$', display: false}
                ],
                throwOnError: false
            });
        }
        
    } else {
        contentDiv.textContent = content;
    }
    
    messageDiv.appendChild(contentDiv);
    chatMessages.appendChild(messageDiv);
    
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
