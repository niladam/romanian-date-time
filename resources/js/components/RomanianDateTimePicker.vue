<template>
    <input ref="romanianDatepickerInput"
           :disabled="disabled"
           :dusk="field.attribute"
           :class="{'!cursor-not-allowed': disabled}"
           :value="value"
           :name="field.name"
           :placeholder="placeholder"
           type="text">
</template>

<script>
    import flatpickr   from 'flatpickr'
    import {Romanian} from 'flatpickr/dist/l10n/ro'

    export default {
        props: {
            field:          {
                type: Object,
                required: true,
            },
            value:          {
                type: String,
                required: false,
                default: ''
            },
            placeholder:    {
                type:    String,
                default: () => {
                    return moment().format('DD.MM.YYYY HH:mm:ss')
                },
            },
            disabled:       {
                type:    Boolean,
                default: false,
            },
            dateFormat:     {
                type:    String,
                default: 'd.m.Y H:i:S',
            },
            twelveHourTime: {
                type:    Boolean,
                default: false,
            },
            enableSeconds:  {
                type:    Boolean,
                default: false,
            }
        },

        data() {
            return {
                flatpickr: null
            }
        },

        mounted() {
            this.$nextTick(() => {
                this.flatpickr = flatpickr(this.$refs.romanianDatepickerInput, {
                    enableTime:    this.enableTime,
                    enableSeconds: this.enableSeconds,
                    onClose:       this.onChange,
                    dateFormat:    this.dateFormat,
                    allowInput:    true,
                    time_24hr:     true,
                    locale:        Romanian,
                    onReady: function(_, __, fp) {
                        fp.calendarContainer.classList.add('romanian-date-time')
                    }
                })
            })
        },
        computed: {
            enableTime() {
                if (this.field.options) {
                    try {
                        let enableTime = this.field.options.enableTime;
                        if (enableTime) {
                            return true;
                        }
                    } catch (e) {
                        // console.warn(e)
                    }
                }
                return false
            },
        },
        methods: {
            onChange() {
                this.$emit('change', this.$refs.romanianDatepickerInput.value)
            },

        },
    }
</script>

<style scoped>
    .\!cursor-not-allowed {
        cursor: not-allowed !important;
    }
</style>
