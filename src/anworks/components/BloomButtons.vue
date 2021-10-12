<template>
  <div>

    <input
      id="bloom_1"
      v-model="bloomButtons.radio"
      type="radio"
      name="bloom"
      value="1"
      class="custom-bloom-btn"
    >
    <label for="bloom_1" />

    <input
      id="bloom_2"
      v-model="bloomButtons.radio"
      type="radio"
      name="bloom"
      value="2"
      class="custom-bloom-btn"
    >
    <label for="bloom_2" />

    <input
      id="bloom_3"
      v-model="bloomButtons.radio"
      type="radio"
      name="bloom"
      value="3"
      class="custom-bloom-btn"
    >
    <label for="bloom_3" />

    <input
      id="bloom_4"
      v-model="bloomButtons.radio"
      type="radio"
      name="bloom"
      value="4"
      class="custom-bloom-btn"
    >
    <label for="bloom_4" />

    <input
      id="bloom_5"
      v-model="bloomButtons.radio"
      type="radio"
      name="bloom"
      value="5"
      class="custom-bloom-btn"
    >
    <label for="bloom_5" />

    <input
      id="bloom_6"
      v-model="bloomButtons.radio"
      type="radio"
      name="bloom"
      value="6"
      class="custom-bloom-btn"
    >
    <label for="bloom_6" />
  </div>
</template>

<script>
export default {
  props: {
    bloomButtons: {
      radio: Object,
    },
  },
}
</script>

<style lang="scss">
  .custom-bloom-btn {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0;
  }
  .custom-bloom-btn + label {
    display: inline-flex;
    align-items: center;
    user-select: none;
    margin-right: 24px;
    transition: .5s;
    &:hover {
        background: #D1CCFF;
        border-radius: 4px;
        box-shadow: 0px 0px 10px rgba(115, 103, 240, 0.65);
        &::before {
            color: #fff;
        }
    }
    &::before {
        content: '1';
        align-items: center;
        justify-content: center;
        display: inline-flex;
        width: 47px;
        height: 47px;
        color: #D1CCFF;
        border: 2px solid #D1CCFF;
        border-radius: 4px;
        cursor: pointer;
        transition: .5s;
    }
  }
  .custom-bloom-btn:checked + label::before {
      background: #D1CCFF;
      color: #fff;
  }

  #bloom_2 + label::before {
    content: '2';
    color: #A89FFF;
    border: 2px solid #A89FFF;
  }
  #bloom_2 + label {
    &:hover {
        background: #A89FFF;
        &::before {
            color: #fff;
        }
    }
  }
  #bloom_2:checked + label::before {
      background: #A89FFF;
      color: #fff;
  }

  #bloom_3 + label::before {
    content: '3';
    color: #786AFF;
    border: 2px solid #786AFF;
  }
  #bloom_3 + label {
    &:hover {
        background: #786AFF;
        &::before {
            color: #fff;
        }
    }
  }
  #bloom_3:checked + label::before {
      background: #786AFF;
      color: #fff;
  }

  #bloom_4 + label::before {
    content: '4';
    color: #5C4BFF;
    border: 2px solid #5C4BFF;
  }
  #bloom_4 + label {
    &:hover {
        background: #5C4BFF;
        &::before {
            color: #fff;
        }
    }
  }
  #bloom_4:checked + label::before {
      background: #5C4BFF;
      color: #fff;
  }

  #bloom_5 + label::before {
    content: '5';
    color: #402FDD;
    border: 2px solid #402FDD;
  }
  #bloom_5 + label {
    &:hover {
        background: #402FDD;
        &::before {
            color: #fff;
        }
    }
  }
  #bloom_5:checked + label::before {
      background: #402FDD;
      color: #fff;
  }

  #bloom_6 + label::before {
    content: '6';
    color: #24188D;
    border: 2px solid #24188D;
  }
  #bloom_6 + label {
    &:hover {
        background: #24188D;
        &::before {
            color: #fff;
        }
    }
  }
  #bloom_6:checked + label::before {
      background: #24188D;
      color: #fff;
  }

</style>
